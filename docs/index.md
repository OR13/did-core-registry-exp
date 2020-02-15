#### [View GitHub](https://github.com/OR13/did-core-registry-exp)

<h1 id="didDocument"><a href="#didDocument">didDocument</a></h1>

A DID document is the resource that is associated with a decentralized identifier (DID). DID documents typically express verification methods (such as public keys) and services that can be used to interact with a DID controller.

<h2 id="@context"><a href="#@context">@context</a></h2>

The JSON-LD context of the document.

<h2 id="id"><a href="#id">id</a></h2>

The id of the DID Document

Example:

```json
"did:key:z6MksQ35B5bwZDQq4QKuhQW2Sv6dcqwg4PqcSFf67pdgrtjB"
```

<h2 id="publicKey"><a href="#publicKey">publicKey</a></h2>

A public key is a verification method. Public keys are used for digital signatures, encryption and other cryptographic operations, which in turn are the basis for purposes such as authentication.

[View JSON-LD Context](https://github.com/OR13/did-core-registry-exp/blob/master/contexts/did-core-latest.jsonld#L12)

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

<h3 id="id"><a href="#id">id</a></h3>

Must be a URI

Example:

```json
"did:example:123#primary"
```

<h3 id="type"><a href="#type">type</a></h3>

The type of the public key.

Example:

```json
"EcdsaSecp256k1VerificationKey2019"
```

<h4 id="EcdsaSecp256k1VerificationKey2019"><a href="#EcdsaSecp256k1VerificationKey2019">EcdsaSecp256k1VerificationKey2019</a></h4>

This property is defined using JSON-LD.

[View JSON-LD Context](https://w3id.org/security/#EcdsaSecp256k1VerificationKey2019)
