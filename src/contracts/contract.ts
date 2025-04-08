export const wagmiContractConfig = {
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: [
    {
      type: "constructor",
      inputs: [
        { name: "initialOwner", type: "address", internalType: "address" },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addFriend",
      inputs: [
        {
          name: "_friendAddress",
          type: "address[]",
          internalType: "address[]",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "createAccount",
      inputs: [{ name: "name", type: "string", internalType: "string" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "existsAccount",
      inputs: [{ name: "key", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "existsRoom",
      inputs: [{ name: "key", type: "bytes32", internalType: "bytes32" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "existsUserName",
      inputs: [{ name: "key", type: "bytes32", internalType: "bytes32" }],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getChatRoomUsers",
      inputs: [{ name: "_roomId", type: "string", internalType: "string" }],
      outputs: [{ name: "", type: "address[]", internalType: "address[]" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMessagesByRoomId",
      inputs: [{ name: "_roomId", type: "string", internalType: "string" }],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct Chat.MessageStruct[]",
          components: [
            { name: "message", type: "string", internalType: "string" },
            { name: "roomId", type: "bytes32", internalType: "bytes32" },
            { name: "sender", type: "address", internalType: "address" },
            { name: "timestamp", type: "uint256", internalType: "uint256" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getPredefinedFriends",
      inputs: [],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct Chat.GenericFriendStruct[]",
          components: [
            { name: "_address", type: "address", internalType: "address" },
            { name: "_nickname", type: "string", internalType: "string" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getRoomId",
      inputs: [
        { name: "user1", type: "address", internalType: "address" },
        { name: "user2", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
      stateMutability: "pure",
    },
    {
      type: "function",
      name: "getRoomsLength",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getUserFriends",
      inputs: [
        { name: "userAddress", type: "address", internalType: "address" },
      ],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct Chat.FriendStruct[]",
          components: [
            { name: "_address", type: "address", internalType: "address" },
            { name: "_nickname", type: "string", internalType: "string" },
            { name: "_timestamp", type: "uint256", internalType: "uint256" },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getUserName",
      inputs: [
        { name: "userAddress", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getUsersLength",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "isFriend",
      inputs: [
        { name: "friendAddress", type: "address", internalType: "address" },
      ],
      outputs: [{ name: "", type: "bool", internalType: "bool" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "owner",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "renounceOwnership",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "sendMessage",
      inputs: [
        { name: "_roomId", type: "string", internalType: "string" },
        { name: "message", type: "string", internalType: "string" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "startChat",
      inputs: [{ name: "chatee", type: "address", internalType: "address" }],
      outputs: [{ name: "", type: "string", internalType: "string" }],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "transferOwnership",
      inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "OwnershipTransferred",
      inputs: [
        {
          name: "previousOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "newOwner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "error",
      name: "CannotAddYourselfAsFriend",
      inputs: [
        { name: "userAddress", type: "address", internalType: "address" },
      ],
    },
    {
      type: "error",
      name: "ChatRoomDoesNotExist",
      inputs: [{ name: "roomId", type: "bytes32", internalType: "bytes32" }],
    },
    {
      type: "error",
      name: "FriendAccountDoesNotExist",
      inputs: [
        { name: "friendAddress", type: "address", internalType: "address" },
      ],
    },
    {
      type: "error",
      name: "OwnableInvalidOwner",
      inputs: [{ name: "owner", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "OwnableUnauthorizedAccount",
      inputs: [{ name: "account", type: "address", internalType: "address" }],
    },
    {
      type: "error",
      name: "UserAccountAlreadyExists",
      inputs: [
        { name: "userAddress", type: "address", internalType: "address" },
      ],
    },
    {
      type: "error",
      name: "UserAccountDoesNotExist",
      inputs: [
        { name: "userAddress", type: "address", internalType: "address" },
      ],
    },
    {
      type: "error",
      name: "UserIsAlreadyAFriend",
      inputs: [
        { name: "userAddress", type: "address", internalType: "address" },
      ],
    },
    {
      type: "error",
      name: "UserNameAlreadyExists",
      inputs: [{ name: "name", type: "bytes32", internalType: "bytes32" }],
    },
  ],
} as const;
