pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    bool public synthesis;
    uint public created; 
    address public owner; 

    address[] public materials; 
    uint[] public amounts;

    constructor (string memory name, string memory symbol) public ERC20(name, symbol) {
        synthesis = true;
        created = block.timestamp;
        owner = msg.sender;
    }

    function fuse(address[] memory _materials, uint[] memory _amounts) public {
        require(_materials.length == _amounts.length );
        require(_materials.length > 0, "materials > 0" );

        materials = _materials;
        amounts = _amounts;
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function burn(address to, uint256 amount) public {
        _burn(to, amount);
    }
}