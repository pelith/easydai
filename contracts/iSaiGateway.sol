pragma solidity ^0.4.24;

contract Ownable {
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    /**
     * @dev The Ownable constructor sets the original `owner` of the contract to the sender
     * account.
     */
    constructor() public {
        owner = msg.sender;
    }
    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    /**
    * @dev Allows the current owner to transfer control of the contract to a newOwner.
    * @param newOwner The address to transfer ownership to.
    */
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0));
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}

contract Exchange {
	function ethToTokenTransferInput(uint256 min_tokens, uint256 deadline, address recipient) public payable returns(uint256);
}

contract iDaiGateway is Ownable {
	Exchange iDaiEx = Exchange(0x81eeD7F1EcbD7FA9978fcc7584296Fb0C215Dc5C);

	function () public payable {
		etherToiDai(msg.sender);
	}

	function etherToiDai(address to) public payable returns(uint256) {
        return iDaiEx.ethToTokenTransferInput.value(msg.value * 996 / 1000)(1, now, to);
	}

	function makeprofit() public onlyOwner {
		owner.transfer(address(this).balance);
	}

}