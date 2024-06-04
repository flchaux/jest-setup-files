// setupTest.ts

module.exports = async () => {
  console.log("Exported function is called");
  global.foo = "bar";
};
console.log("setupTest is executed");
