//SPDX-License-Identifier: MIT
pragma solidity >=0.8.19 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author 0xifis
 */
contract AttestationService {
    enum DataType { UINT256, STRING, ADDRESS }

    struct SchemaProperty {
        string name;
        DataType dataType;
    }

    struct Schema {
        uint256 id;
        string name;
        address creator;
    }

    struct Attestation {
        uint256 id;
        uint256 schemaId;
        string data; // JSON string for simplicity
        address issuer;
        address subject;
        string network;
    }

	struct Recipe {
        uint256 id;
        string name;
        uint256[] schemaIds;
    }

    Schema[] private schemas;
    Attestation[] private attestations;
	Recipe[] private recipes;
    mapping(uint256 => SchemaProperty[]) public schemaProperties;

    event SchemaRegistered(uint256 schemaId, string name, address creator);
    event AttestationRegistered(uint256 attestationId, uint256 schemaId, address issuer, address subject, string network);
	event RecipeRegistered(uint256 recipeId, string name);


    // Register a new schema with multiple properties
     function registerSchema(string calldata name, SchemaProperty[] calldata properties) external {
        uint256 schemaId = schemas.length;
        schemas.push(Schema(schemaId, name, msg.sender));
        
        // Explicitly push each property to the mapping
        for (uint256 i = 0; i < properties.length; i++) {
            schemaProperties[schemaId].push(SchemaProperty(properties[i].name, properties[i].dataType));
        }

        emit SchemaRegistered(schemaId, name, msg.sender);
    }

    // Register a new attestation
    function registerAttestation(uint256 schemaId, string memory data, address subject, string memory network) public {
        require(schemaId < schemas.length, "Schema does not exist");
        
        uint256 attestationId = attestations.length;
		//TODO: Add validation check for the data
        attestations.push(Attestation(attestationId, schemaId, data, msg.sender, subject, network));

        emit AttestationRegistered(attestationId, schemaId, msg.sender, subject, network);
    }

	// Register a new recipe
    function registerRecipe(string calldata name, uint256[] calldata schemaIds) external {
        uint256 recipeId = recipes.length;
        for(uint256 i = 0; i < schemaIds.length; i++) {
            require(schemaIds[i] < schemas.length, "Schema does not exist");
        }
        recipes.push(Recipe(recipeId, name, schemaIds));

        emit RecipeRegistered(recipeId, name);
    }

    // Get a schema by ID
    function getSchema(uint256 schemaId) public view returns (Schema memory) {
        require(schemaId < schemas.length, "Schema does not exist");
        return schemas[schemaId];
    }

    // Get an attestation by ID
    function getAttestation(uint256 attestationId) public view returns (Attestation memory) {
        require(attestationId < attestations.length, "Attestation does not exist");
        return attestations[attestationId];
    }

    // Get total number of schemas
    function getTotalSchemas() public view returns (uint256) {
        return schemas.length;
    }

    // Get total number of attestations
    function getTotalAttestations() public view returns (uint256) {
        return attestations.length;
    }
}