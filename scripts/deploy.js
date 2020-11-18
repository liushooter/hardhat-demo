async function main() {
  const Token = await ethers.getContractFactory("Token");

  const token = await Token.deploy("abc", "def");

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });