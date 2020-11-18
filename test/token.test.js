const { expect } = require("chai");

describe("Token", function() {
  it("fuse", async function() {
    const Token = await ethers.getContractFactory("Token");

    const a = "0x" + "1".repeat(40)
    const b = "0x" + "2".repeat(40)

    const _tokens = [a, b]
    const _amounts = [200, 130]
    const token = await Token.deploy("rebase", "rebase");
    await token.deployed();

    console.log("Token deployed to:", token.address);

    await token.fuse(_tokens, _amounts);

    const synthesis = await token.synthesis()
    const created = await token.created()
    const owner = await token.owner()

    const materials = await token.materials(0)
    const amounts = await token.amounts(0)

    console.log(synthesis)
    console.log(created.toNumber())
    console.log(owner)

    console.log(materials)
    console.log(amounts.toNumber())

    expect(synthesis).to.equal(true);
  });
});
