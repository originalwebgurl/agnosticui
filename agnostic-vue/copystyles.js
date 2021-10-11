/**
 * Node script to copy over CSS from <root>/button.css into ./src/Button.svelte
 */
const fs = require("fs");

/**
 * Common (prerequisite css custom properties aka design tokens we need defined first)
 */
let css = fs.readFileSync("../agnostic-css/css-dist/common.min.css", "utf8");
fs.writeFileSync("./src/css/common.min.css", css, "utf8");

/**
 * Buttons
 */
css = fs.readFileSync("../agnostic-css/button.css", "utf8");
const vue = fs.readFileSync("./src/stories/Button.vue", "utf8");
const styleRegex = /<style module>([\s\S]*?)<\/style>/;
let withSynchronizedStyles = vue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Button.vue", withSynchronizedStyles, "utf8");

/**
 * Button Groups
 */
css = fs.readFileSync("../agnostic-css/button-group.css", "utf8");
const vueButtonGroup = fs.readFileSync("./src/stories/ButtonGroup.vue", "utf8");
const vueBtnGroupsSynchronizedStyles = vueButtonGroup.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/ButtonGroup.vue",
  vueBtnGroupsSynchronizedStyles,
  "utf8"
);

/**
 * Progress
 */
css = fs.readFileSync("../agnostic-css/progress.css", "utf8");
const progressVue = fs.readFileSync("./src/stories/Progress.vue", "utf8");
const progressSynchronized = progressVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Progress.vue", progressSynchronized, "utf8");


/**
 * Tabs
 */
css = fs.readFileSync("../agnostic-css/tabs.css", "utf8");
const tabVue = fs.readFileSync("./src/stories/TabPanel.vue", "utf8");
const tabSynchronized = tabVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/TabPanel.vue", tabSynchronized, "utf8");
const tabsVue = fs.readFileSync("./src/stories/Tabs.vue", "utf8");
const tabsSynchronized = tabsVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Tabs.vue", tabsSynchronized, "utf8");

/**
 * Cards
 */
css = fs.readFileSync("../agnostic-css/card.css", "utf8");
const cardVue = fs.readFileSync("./src/stories/Card.vue", "utf8");
const cardSynchronized = cardVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Card.vue", cardSynchronized, "utf8");

/**
 * Header
 */
css = fs.readFileSync("../agnostic-css/header.css", "utf8");
const headerVue = fs.readFileSync("./src/stories/Header.vue", "utf8");
const headerSynchronized = headerVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Header.vue", headerSynchronized, "utf8");

/**
 * Header Navigation & Header Nav Item
 */
css = fs.readFileSync("../agnostic-css/headernav.css", "utf8");
const headerNavVue = fs.readFileSync("./src/stories/HeaderNav.vue", "utf8");
const headerNavSynchronized = headerNavVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/HeaderNav.vue", headerNavSynchronized, "utf8");
css = fs.readFileSync("../agnostic-css/headernavitem.css", "utf8");
const headerNavItemVue = fs.readFileSync(
  "./src/stories/HeaderNavItem.vue",
  "utf8"
);
const headerNavItemSynchronized = headerNavItemVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/HeaderNavItem.vue",
  headerNavItemSynchronized,
  "utf8"
);

/**
 * Inputs
 */
css = fs.readFileSync("../agnostic-css/input.css", "utf8");
const inputVue = fs.readFileSync("./src/stories/Input.vue", "utf8");
const inputSynchronized = inputVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Input.vue", inputSynchronized, "utf8");

css = fs.readFileSync("../agnostic-css/inputaddonitem.css", "utf8");
const inputAddonItemVue = fs.readFileSync(
  "./src/stories/InputAddonItem.vue",
  "utf8"
);
const inputAddonItemSynchronized = inputAddonItemVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/InputAddonItem.vue",
  inputAddonItemSynchronized,
  "utf8"
);

/**
 * Choice Inputs (Radios & Checkboxes)
 */
css = fs.readFileSync("../agnostic-css/choice-input.css", "utf8");
const choiceInputVue = fs.readFileSync("./src/stories/ChoiceInput.vue", "utf8");
const choiceInputSynchronized = choiceInputVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync(
  "./src/stories/ChoiceInput.vue",
  choiceInputSynchronized,
  "utf8"
);

/**
 * Switch
 */
css = fs.readFileSync("../agnostic-css/switch.css", "utf8");
const switchVue = fs.readFileSync("./src/stories/Switch.vue", "utf8");
const switchSynchronized = switchVue.replace(
  styleRegex,
  `<style module>\n${css}\n</style>`
);
fs.writeFileSync("./src/stories/Switch.vue", switchSynchronized, "utf8");