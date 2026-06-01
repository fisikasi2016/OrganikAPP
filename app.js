import { groupData, compounds } from "./compounds.js";

let deck = [];
let currentIndex = 0;
let flipped = false;

const groupsContainer = document.getElementById("groups");
const startBtn = document.getElementById("startBtn");
const studyArea = document.getElementById("studyArea");
const flashcard = document.getElementById("flashcard");
const cardContent = document.getElementById("cardContent");
const progressText = document.getElementById("progressText");
const videoBox = document.getElementById("videoBox");
const videoLink = document.getElementById("videoLink");
const videoThumb = document.getElementById("videoThumb");
const helpBtn = document.getElementById("helpBtn");
const helpText = document.getElementById("helpText");
const settingsPanel = document.getElementById("settingsPanel");
const settingsToggle = document.getElementById("settingsToggle");

document.getElementById("flipBtn").addEventListener("click", flipCard);
document.getElementById("prevBtn").addEventListener("click", previousCard);
document.getElementById("nextBtn").addEventListener("click", nextCard);

flashcard.addEventListener("click", flipCard);
startBtn.addEventListener("click", startStudy);

settingsToggle.addEventListener("click", () => {
  settingsPanel.classList.toggle("settings-collapsed");

  settingsToggle.textContent = settingsPanel.classList.contains("settings-collapsed")
    ? "Aukeren panela erakutsi"
    : "Aukeren panela ezkutatu";
});

helpBtn.addEventListener("click", (event) => {
  event.stopPropagation();

  if (!deck.length) return;

  const card = deck[currentIndex];

  helpText.textContent = card.group;
  helpText.classList.toggle("hidden");
});

renderGroups();

function renderGroups() {
  groupsContainer.innerHTML = "";

  groupData.forEach((category) => {
    const categoryEl = document.createElement("section");
    categoryEl.className = "group-card";

    const title = document.createElement("button");
    title.className = "group-title";
    title.type = "button";
    title.textContent = category.title;

    const itemList = document.createElement("div");
    itemList.className = "group-items";

    category.items.forEach((item) => {
      const option = document.createElement("button");

      option.type = "button";
      option.className = "family-option ";
      option.dataset.family = item;
      option.textContent = item;

      option.addEventListener("click", () => {
        option.classList.toggle("selected");
      });

      itemList.appendChild(option);
    });

    title.addEventListener("click", () => {
      const options = itemList.querySelectorAll(".family-option");

      const allSelected = [...options].every((option) =>
        option.classList.contains("selected")
      );

      options.forEach((option) => {
        option.classList.toggle("selected", !allSelected);
      });
    });

    categoryEl.appendChild(title);
    categoryEl.appendChild(itemList);
    groupsContainer.appendChild(categoryEl);
  });
}

function startStudy() {
  const selectedGroups = [...document.querySelectorAll(".family-option.selected")]
    .map((option) => option.dataset.family);

  const selectedModes = [...document.querySelectorAll(".mode-grid input[type='checkbox']:checked")]
    .map((input) => input.value);

  const order = document.querySelector("input[name='order']:checked").value;

  if (selectedGroups.length === 0 || selectedModes.length === 0) {
    alert("Aukeratu gutxienez familia bat eta ariketa mota bat.");
    return;
  }

  let selectedCompounds = compounds.filter((compound) =>
    selectedGroups.includes(compound.group)
  );

  if (order === "ordered") {
    selectedCompounds.sort((a, b) => a.difficulty - b.difficulty);
  } else {
    selectedCompounds = shuffle(selectedCompounds);
  }

  const countValue = document.getElementById("cardCount").value;

  const count =
    countValue === "infinite"
      ? selectedCompounds.length
      : Number(countValue);

  const balancedCompounds = getBalancedCompounds(
    selectedCompounds,
    selectedGroups,
    count,
    order
  );

  deck = [];

  deck = [];

    balancedCompounds.forEach((compound) => {
    let modesForCompound = [...selectedModes];

    if (order === "mixed") {
        modesForCompound = shuffle(modesForCompound);
    }

    modesForCompound.forEach((mode) => {
        deck.push({
        ...compound,
        mode
        });
    });
    });

    if (order === "mixed") {
    deck = balanceModes(deck, 2);
    }

  currentIndex = 0;
  flipped = false;

  studyArea.classList.remove("hidden");
  settingsPanel.classList.add("settings-collapsed");
  settingsToggle.classList.remove("hidden");
  settingsToggle.textContent = "Aukeren Panela Erakutsi";
  document.body.classList.add("study-active");

  renderCard();
}

function getDisplayName(card) {
  const names = [card.name, ...(card.aliases || [])];

  return names[Math.floor(Math.random() * names.length)];
}

function buildNameAnswer(card) {
  const aliases = card.aliases || [];

  if (aliases.length === 0) {
    return `<h2>${card.name}</h2>`;
  }

  return `
    <h2>${card.name}</h2>
    <h4 class="alias-text">
      Beste izenak: ${aliases.join(", ")}
    </h4>
  `;
}

function renderCard() {
  if (!deck.length) return;

  const card = deck[currentIndex];

  flipped = false;

  videoBox.classList.add("hidden");
  helpText.classList.add("hidden");
  helpText.textContent = "";

  progressText.textContent = `${currentIndex + 1} / ${deck.length}`;

  if (card.mode === "nameToFormula") {
    cardContent.innerHTML = `
        <h2>${getDisplayName(card)}</h2>
    `;
    } else {
    renderMolecule(card.structure);
    }
}

function flipCard() {
  if (!deck.length) return;

  flipped = !flipped;

  const card = deck[currentIndex];

  helpText.classList.add("hidden");
  helpText.textContent = "";

  if (flipped) {
    if (card.mode === "nameToFormula") {
        renderMolecule(card.structure);
        } else {
        cardContent.innerHTML = buildNameAnswer(card);
        }

  } else {
    renderCard();
  }
}

function countCarbonsInText(text = "") {
  const normalizedText = text
    .replaceAll("CH₃", "CH3")
    .replaceAll("CH₂", "CH2");

  const matches = normalizedText.match(/CH3|CH2|CH|C/g);

  return matches ? matches.length : 0;
}

function getBranchCarbonLength(branch) {
  if (branch.type === "isopropyl") return 3;
  if (branch.type === "isobutyl") return 4;

  if (branch.atoms) {
    return branch.atoms.reduce(
      (total, atom) => total + countCarbonsInText(atom),
      0
    );
  }
  if (branch.type === "tertbutyl") return 4;

  if (branch.text) {
    return countCarbonsInText(branch.text);
  }

  return 0;
}

function getEndGroupCarbonLength(endGroup = "") {
  return countCarbonsInText(endGroup);
}

function getApproxCarbonLength(structure) {
  const mainChainLength = structure.chain
    ? structure.chain.reduce(
        (total, atom) => total + countCarbonsInText(atom),
        0
      )
    : 0;

  if (!structure.chain) {
    return 0;
  }

  const endGroupLength = structure.endGroup
    ? getEndGroupCarbonLength(structure.endGroup)
    : 0;

  const branches = structure.branches || [];

  const isEster = structure.endGroup?.startsWith("COO");

  // Detectar éteres
  const isEther = structure.endGroup === "O";

  // Ésteres
  if (isEster) {
    const longestBranchLength = branches.reduce(
      (longest, branch) =>
        Math.max(longest, getBranchCarbonLength(branch)),
      0
    );

    return (
      mainChainLength +
      endGroupLength +
      longestBranchLength
    );
  }

  // Éteres
  if (isEther) {
    const longestBranchLength = branches.reduce(
      (longest, branch) =>
        Math.max(longest, getBranchCarbonLength(branch)),
      0
    );

    // +1 para contar el oxígeno como parte visual de la cadena
    return (
      mainChainLength +
      longestBranchLength +
      1
    );
  }

  const longestVisualPath = branches.reduce((longest, branch) => {
    const branchLength = getBranchCarbonLength(branch);

    if (branchLength === 0) return longest;

    const pathLengthFromBranch =
      branch.at + 1 + branchLength;

    return Math.max(longest, pathLengthFromBranch);
  }, mainChainLength);

  return Math.max(
    longestVisualPath,
    mainChainLength + endGroupLength
  );
}

function renderMolecule(structure) {
  const approxLength = getApproxCarbonLength(structure);

  const isRingStructure =
    structure.cyclic || structure.aromatic;

  cardContent.classList.toggle(
    "long-molecule",
    approxLength > 5 && !isRingStructure
  );

  cardContent.classList.toggle(
    "very-long-molecule",
    approxLength > 6 && !isRingStructure
  );

  cardContent.innerHTML = buildOrganicStructure(structure);

  fitMoleculeToCard(approxLength, isRingStructure);
}


function fitMoleculeToCard(approxLength, isRingStructure) {
  const scaler = cardContent.querySelector(".molecule-scaler");

  if (!scaler) return;

  if (isRingStructure) {
    scaler.style.transform = "scale(0.7)";
    return;
  }

  if (approxLength > 8) {
    scaler.style.transform = "scale(0.7)";
  } else {
    scaler.style.transform = "scale(0.8)";
  }
}

function buildBranchContent(branch) {
  if (branch.type === "isopropyl") {
    return `
      <span class="branch-chain">
        <span class="branch-atom">CH</span>
        <span class="branch-horizontal-bond"></span>
        <span class="branch-atom">CH₃</span>
        <span class="branch branch-down">
          <span class="branch-chain">
            <span class="branch-atom">CH₃</span>
          </span>
        </span>
      </span>
    `;
  }

  if (branch.type === "isobutyl") {
    return `
      <span class="branch-chain">
        <span class="branch-atom">CH₂</span>
        <span class="branch-horizontal-bond"></span>
        <span class="branch-atom">CH</span>
        <span class="branch-horizontal-bond"></span>
        <span class="branch-atom">CH₃</span>
        <span class="branch branch-down">
          <span class="branch-chain">
            <span class="branch-atom">CH₃</span>
          </span>
        </span>
      </span>
    `;
  }

  if (branch.type === "tertbutyl") {
    return `
      <span class="branch-chain">
        <span class="branch-atom">C</span>

        <span class="branch branch-up">
          <span class="branch-chain">
            <span class="branch-atom">CH₃</span>
          </span>
        </span>

        <span class="branch branch-down">
          <span class="branch-chain">
            <span class="branch-atom">CH₃</span>
          </span>
        </span>

        <span class="branch-horizontal-bond"></span>
        <span class="branch-atom">CH₃</span>
      </span>
    `;
  }

  const atoms = branch.atoms || [branch.text];

  const growClass =
    branch.grow === "left"
      ? "branch-grow-left"
      : "";

  const branchAtomsHTML = atoms
    .map((atom, index) => `
      <span class="branch-atom">${atom}</span>
      ${
        index < atoms.length - 1
          ? `<span class="branch-horizontal-bond"></span>`
          : ""
      }
    `)
    .join("");

  return `
    <span class="branch-chain ${growClass}">
      ${branchAtomsHTML}
    </span>
  `;
}

function buildOrganicStructure(structure) {

  if (structure.aromatic) {
    return buildAromaticStructure(structure);
  }

  if (structure.cyclic) {
    return buildCyclicStructure(structure);
  }

  const chainHTML = structure.chain
    .map((atom, index) => {
      const branches = structure.branches?.filter((branch) => branch.at === index) || [];
      const nextBond = structure.bonds?.[index];

      return `
        <span class="atom-wrapper">
          ${
            branches
                .map((branch) => `
                <span class="branch branch-${branch.direction} ${branch.bond === "double" ? "branch-double" : ""}">
                    ${buildBranchContent(branch)}
                </span>
                `)
                .join("")
            }

          <span class="atom">${atom}</span>
        </span>

        ${nextBond ? buildBond(nextBond) : ""}
      `;
    })
    .join("");

  const endGroupHTML = structure.endGroup
    ? `${buildBond("single")}${buildEndGroup(structure.endGroup)}`
    : "";

  return `
    <div class="organic-structure">
        <div class="molecule-scaler">
        <div class="organic-chain">
            ${chainHTML}
            ${endGroupHTML}
        </div>
        </div>
    </div>
    `;
}

function buildAromaticStructure(structure) {
  const size = structure.ring.length;
  const radius = 120;
  const center = 160;
  const angleStep = (2 * Math.PI) / size;

  const points = structure.ring.map((atom, index) => {

    const angle = angleStep * index - Math.PI / 2;

    return {
      atom,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  });

  const bondsHTML = points
    .map((point, index) => {

      const next = points[(index + 1) % size];

      const dx = next.x - point.x;
      const dy = next.y - point.y;

      const length = Math.sqrt(dx * dx + dy * dy);

      const angle =
        Math.atan2(dy, dx) * 180 / Math.PI;

      const x = (point.x + next.x) / 2;
      const y = (point.y + next.y) / 2;

      return `
        <span
          class="ring-bond ring-bond-single"
          style="
            left:${x}px;
            top:${y}px;
            width:${length}px;
            transform:
              translate(-50%, -50%)
              rotate(${angle}deg);
          "
        >
          <span></span>
        </span>
      `;
    })
    .join("");

  const atomsHTML = points
    .map((point, index) => {

      const branches =
        structure.branches?.filter(
          branch => branch.at === index
        ) || [];

      const branchesHTML = branches
        .map(branch => `
            <span class="
            ring-branch
            ring-branch-${branch.direction}
            ">
            ${buildBranchContent(branch)}
            </span>
        `)
        .join("");

      return `
        <span
          class="ring-atom"
          style="
            left:${point.x}px;
            top:${point.y}px;
          "
        >
          ${point.atom}
          ${branchesHTML}
        </span>
      `;
    })
    .join("");

  return `
    <div class="organic-structure">
      <div class="molecule-scaler">

        <div class="organic-ring aromatic-ring">

          ${bondsHTML}

          <div class="aromatic-circle"></div>

          ${atomsHTML}

        </div>

      </div>
    </div>
  `;
}

function buildCyclicStructure(structure) {
  const size = structure.ring.length;
  const radius = 120;
  const center = 160;
  const angleStep = (2 * Math.PI) / size;

  const points = structure.ring.map((atom, index) => {
    const angle = angleStep * index - Math.PI / 2;

    return {
      atom,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle)
    };
  });

  const atomsHTML = points
    .map((point, index) => {
        const branches = structure.branches?.filter((branch) => branch.at === index) || [];

        const branchesHTML = branches
            .map((branch) => `
                <span class="
                  ring-branch
                  ring-branch-${branch.direction}
                  ${branch.bond === "double" ? "ring-branch-double" : ""}
                ">
                ${buildBranchContent(branch)}
                </span>
            `)
            .join("");

        return `
        <span 
            class="ring-atom"
            style="left:${point.x}px; top:${point.y}px;"
        >
            ${point.atom}
            ${branchesHTML}
        </span>
        `;
    })
    .join("");

  const bondsHTML = structure.bonds
    .map((bond, index) => {
      const start = points[index];
      const end = points[(index + 1) % size];

      const dx = end.x - start.x;
      const dy = end.y - start.y;

      const length = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx) * 180 / Math.PI;

      const x = (start.x + end.x) / 2;
      const y = (start.y + end.y) / 2;

      return `
        <span 
          class="ring-bond ring-bond-${bond}"
          style="
            left:${x}px;
            top:${y}px;
            width:${length}px;
            transform: translate(-50%, -50%) rotate(${angle}deg);
          "
        >
          <span></span>
          ${bond === "double" ? "<span></span>" : ""}
          ${bond === "triple" ? "<span></span><span></span>" : ""}
        </span>
      `;
    })
    .join("");

  return `
    <div class="organic-structure">
      <div class="molecule-scaler">
        <div class="organic-ring">
          ${bondsHTML}
          ${atomsHTML}
        </div>
      </div>
    </div>
  `;
}

function buildBond(type) {
  if (type === "double") {
    return `
      <span class="bond bond-double">
        <span></span>
        <span></span>
      </span>
    `;
  }

  if (type === "triple") {
    return `
      <span class="bond bond-triple">
        <span></span>
        <span></span>
        <span></span>
      </span>
    `;
  }

  return `
    <span class="bond bond-single">
      <span></span>
    </span>
  `;
}

function buildEndGroup(type) {

  // =========================
  // CETONAS
  // =========================

  if (type === "CO") {
    return `
      <span class="ketone-group">

        <span class="central-carbon">C</span>

        <span class="oxygen ketone-oxygen">O</span>

        <span class="vertical-double-bond"></span>
        <span class="vertical-double-bond second"></span>

      </span>
    `;
  }
  //AZIDO KARBOXILIKOA
  if (type === "COOH") {
    return `
      <span class="carboxyl-group">
        <span class="central-carbon">C</span>

        <span class="diagonal-bond double-bond-up"></span>
        <span class="diagonal-bond double-bond-up second"></span>
        <span class="oxygen oxygen-up">O</span>

        <span class="diagonal-bond single-bond-down"></span>
        <span class="oxygen oh-down">OH</span>
      </span>
    `;
  }
  //ALDEHIDOAK
  if (type === "CHO") {
    return `
      <span class="aldehyde-group">
        <span class="central-carbon">C</span>

        <span class="diagonal-bond double-bond-up"></span>
        <span class="diagonal-bond double-bond-up second"></span>
        <span class="oxygen oxygen-up">O</span>

        <span class="diagonal-bond single-bond-down"></span>
        <span class="aldehyde-h">H</span>
      </span>
    `;
  }

  //AMIDA PRIMARIA
  if (type === "CONH2") {
    return `
      <span class="amide-group">

        <span class="central-carbon">C</span>

        <span class="diagonal-bond double-bond-up"></span>
        <span class="diagonal-bond double-bond-up second"></span>

        <span class="oxygen oxygen-up">O</span>

        <span class="diagonal-bond single-bond-down"></span>

        <span class="amide-nh2">NH₂</span>

      </span>
    `;
  }

  // =========================
  // AMIDA SECUNDARIA
  // =========================

  if (type.startsWith("CONH-")) {
    const tail = type.replace("CONH-", "");

    const parts = tail
      .split("-")
      .filter(Boolean);

    const tailHTML = parts
      .map((part, index) => `
        <span class="atom">${part}</span>
        ${
          index < parts.length - 1
            ? `
              <span class="bond bond-single">
                <span></span>
              </span>
            `
            : ""
        }
      `)
      .join("");

    return `
      <span class="amide-group">

        <span class="central-carbon">C</span>

        <span class="diagonal-bond double-bond-up"></span>
        <span class="diagonal-bond double-bond-up second"></span>

        <span class="oxygen oxygen-up">O</span>

        <span class="diagonal-bond single-bond-down"></span>

        <div class="amide-secondary-chain">

          <span class="atom">NH</span>

          <span class="bond bond-single">
            <span></span>
          </span>

          ${tailHTML}

        </div>

      </span>
    `;
  }

  // =========================
  // AMIDA TERCIARIA
  // =========================

  if (type.startsWith("CON(")) {

    return `
      <span class="amide-group">

        <span class="central-carbon">C</span>

        <span class="diagonal-bond double-bond-up"></span>
        <span class="diagonal-bond double-bond-up second"></span>

        <span class="oxygen oxygen-up">O</span>

        <span class="diagonal-bond single-bond-down"></span>

        <div class="amide-tertiary">

          <span class="amide-tertiary-n">

            N

            <span class="amide-upper-right-branch">
              <span class="atom">CH₃</span>
            </span>

            <span class="amide-lower-right-branch">
              <span class="atom">CH₃</span>
            </span>

          </span>

        </div>

      </span>
    `;
  }

  // ESTERES
  if (type.startsWith("COO")) {

    const tail = type.replace("COO", "");

    const parts = tail.match(/CH3|CH2|CH₃|CH₂|CH/g) || [tail];

    const tailHTML = parts
        .map((part, index) => {
            const cleanPart = part
            .replace("CH3", "CH₃")
            .replace("CH2", "CH₂");

            return `
            <span class="atom">${cleanPart}</span>
            ${
                index < parts.length - 1
                ? `
                    <span class="bond bond-single">
                    <span></span>
                    </span>
                `
                : ""
            }
            `;
        })
        .join("");

    return `
      <span class="ester-group dynamic-ester" style="--tail-atoms:${parts.length}">
        <span class="central-carbon">C</span>

        <span class="diagonal-bond double-bond-up"></span>
        <span class="diagonal-bond double-bond-up second"></span>
        <span class="oxygen oxygen-up">O</span>

        <span class="diagonal-bond single-bond-down"></span>

        <div class="ester-tail-chain">
          <span class="atom">O</span>

          <span class="bond bond-single">
            <span></span>
          </span>

          ${tailHTML}
        </div>
      </span>
    `;
  }

  if (type === "CN") {
    return `
      <span class="nitrile-group">

        <span class="atom">C</span>

        <span class="bond bond-triple nitrile-bond">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span class="atom">N</span>

      </span>
    `;
  }

  return `<span class="atom">${type}</span>`;
}



function nextCard() {
  if (currentIndex < deck.length - 1) {
    currentIndex++;
    renderCard();
  }
}

function previousCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
}

function getBalancedCompounds(compoundList, selectedGroups, count, order) {
  const compoundsByGroup = selectedGroups
    .map((group) => {
      let groupCompounds = compoundList.filter(
        (compound) => compound.group === group
      );

      if (order === "ordered") {
        groupCompounds.sort((a, b) => a.difficulty - b.difficulty);
      } else {
        groupCompounds = shuffle(groupCompounds);
      }

      return {
        group,
        compounds: groupCompounds,
        index: 0
      };
    })
    .filter((entry) => entry.compounds.length > 0);

  const balanced = [];

  while (balanced.length < count) {
    let roundGroups = compoundsByGroup.filter(
      (entry) => entry.index < entry.compounds.length
    );

    if (roundGroups.length === 0) break;

    if (order === "mixed") {
      roundGroups = shuffle(roundGroups);
    }

    for (const entry of roundGroups) {
      if (balanced.length >= count) break;

      balanced.push(entry.compounds[entry.index]);
      entry.index++;
    }
  }

  return balanced;
}

function balanceModes(cards, maxSameModeInRow = 2) {
  const remainingCards = shuffle(cards);
  const balanced = [];

  while (remainingCards.length > 0) {
    const lastCards = balanced.slice(-maxSameModeInRow);
    const blockedMode =
      lastCards.length === maxSameModeInRow &&
      lastCards.every((card) => card.mode === lastCards[0].mode)
        ? lastCards[0].mode
        : null;

    const nextIndex = remainingCards.findIndex(
      (card) => card.mode !== blockedMode
    );

    if (nextIndex === -1) {
      balanced.push(remainingCards.shift());
    } else {
      balanced.push(remainingCards.splice(nextIndex, 1)[0]);
    }
  }

  return balanced;
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

let deferredPrompt = null;

const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;

  installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();

  await deferredPrompt.userChoice;

  deferredPrompt = null;
  installBtn.classList.add("hidden");
});

window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  installBtn.classList.add("hidden");
});