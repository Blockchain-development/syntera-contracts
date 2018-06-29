pragma solidity 0.4.23;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract SynteraSmartCoin is StandardToken {
    string public name = "Syntera Sharing Coin";
    string public symbol = "SSC";
    uint8 public decimals = 6;

    constructor() public {
        totalSupply_ = 48000000000000;
        balances[msg.sender] = totalSupply_;
    }
}