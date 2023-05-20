export default {
    "name": "GetHome",
    "kind": "HoudiniQuery",
    "hash": "ead3ab25bdf72b1c1f7f9ecaffb16b98aefdea4e4f3a8484f417a87ce32c7b16",

    "raw": `query GetHome {
  allArtworkdetails {
    artworkCoverImage {
      responsiveImage {
        src
        width
        height
        alt
        title
        sizes
        base64
      }
      id
    }
    artworkTitle
    id
  }
}
`,

    "rootType": "Query",

    "selection": {
        "fields": {
            "allArtworkdetails": {
                "type": "ArtworkdetailRecord",
                "keyRaw": "allArtworkdetails",

                "selection": {
                    "fields": {
                        "artworkCoverImage": {
                            "type": "FileField",
                            "keyRaw": "artworkCoverImage",
                            "nullable": true,

                            "selection": {
                                "fields": {
                                    "responsiveImage": {
                                        "type": "ResponsiveImage",
                                        "keyRaw": "responsiveImage",
                                        "nullable": true,

                                        "selection": {
                                            "fields": {
                                                "src": {
                                                    "type": "String",
                                                    "keyRaw": "src",
                                                    "visible": true
                                                },

                                                "width": {
                                                    "type": "IntType",
                                                    "keyRaw": "width",
                                                    "visible": true
                                                },

                                                "height": {
                                                    "type": "IntType",
                                                    "keyRaw": "height",
                                                    "visible": true
                                                },

                                                "alt": {
                                                    "type": "String",
                                                    "keyRaw": "alt",
                                                    "nullable": true,
                                                    "visible": true
                                                },

                                                "title": {
                                                    "type": "String",
                                                    "keyRaw": "title",
                                                    "nullable": true,
                                                    "visible": true
                                                },

                                                "sizes": {
                                                    "type": "String",
                                                    "keyRaw": "sizes",
                                                    "visible": true
                                                },

                                                "base64": {
                                                    "type": "String",
                                                    "keyRaw": "base64",
                                                    "nullable": true,
                                                    "visible": true
                                                }
                                            }
                                        },

                                        "visible": true
                                    },

                                    "id": {
                                        "type": "UploadId",
                                        "keyRaw": "id",
                                        "visible": true
                                    }
                                }
                            },

                            "visible": true
                        },

                        "artworkTitle": {
                            "type": "String",
                            "keyRaw": "artworkTitle",
                            "nullable": true,
                            "visible": true
                        },

                        "id": {
                            "type": "ItemId",
                            "keyRaw": "id",
                            "visible": true
                        }
                    }
                },

                "visible": true
            }
        }
    },

    "pluginData": {
        "houdini-svelte": {}
    },

    "policy": "CacheOrNetwork",
    "partial": false
};

"HoudiniHash=ead3ab25bdf72b1c1f7f9ecaffb16b98aefdea4e4f3a8484f417a87ce32c7b16";