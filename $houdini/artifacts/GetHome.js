export default {
    "name": "GetHome",
    "kind": "HoudiniQuery",
    "hash": "da1fd16ec8c053c316481f8859f217b1828ba3a6c65e07c690ffec2eaf1c152d",

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
    artworkYear
    artworkSlug
    artworkWriteup {
      value
      links
      blocks
    }
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

                        "artworkYear": {
                            "type": "String",
                            "keyRaw": "artworkYear",
                            "nullable": true,
                            "visible": true
                        },

                        "artworkSlug": {
                            "type": "String",
                            "keyRaw": "artworkSlug",
                            "nullable": true,
                            "visible": true
                        },

                        "artworkWriteup": {
                            "type": "ArtworkdetailModelArtworkWriteupField",
                            "keyRaw": "artworkWriteup",
                            "nullable": true,

                            "selection": {
                                "fields": {
                                    "value": {
                                        "type": "JsonField",
                                        "keyRaw": "value",
                                        "visible": true
                                    },

                                    "links": {
                                        "type": "String",
                                        "keyRaw": "links",
                                        "visible": true
                                    },

                                    "blocks": {
                                        "type": "String",
                                        "keyRaw": "blocks",
                                        "visible": true
                                    }
                                }
                            },

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

"HoudiniHash=da1fd16ec8c053c316481f8859f217b1828ba3a6c65e07c690ffec2eaf1c152d";