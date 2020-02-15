# didDocument

A DID document is the resource that is associated with a decentralized identifier (DID). DID documents typically express verification methods (such as public keys) and services that can be used to interact with a DID controller.

## @context

The JSON-LD context of the document.

## id

The id of the DID Document

Example:

```json
"did:key:z6MksQ35B5bwZDQq4QKuhQW2Sv6dcqwg4PqcSFf67pdgrtjB"
```

## [publicKey](https://identity.foundation/context/security#publicKey)

A public key is a verification method. Public keys are used for digital signatures, encryption and other cryptographic operations, which in turn are the basis for purposes such as authentication.

Example:

```json
{
  "id": "did:example:123#ZC2jXTO6t4R501bfCXv3RxarZyUbdP2w_psLwMuY6ec",
  "type": "Ed25519VerificationKey2018",
  "controller": "did:example:123",
  "publicKeyJwk": {
    "crv": "Ed25519",
    "x": "o3v3B4wU7LPewgr3iQDSc9LGzJKdS0R_698dUXtBXX8",
    "kty": "OKP",
    "kid": "ZC2jXTO6t4R501bfCXv3RxarZyUbdP2w_psLwMuY6ec"
  }
}
```

### id

Must be a URI

Example:

```json
"did:example:123#primary"
```

### type

The type of the public key.

Example:

```json
"EcdsaSecp256k1VerificationKey2019"
```
