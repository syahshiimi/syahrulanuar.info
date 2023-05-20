export type GetHome = {
    readonly "input": GetHome$input;
    readonly "result": GetHome$result | undefined;
};

export type GetHome$result = {
    readonly allArtworkdetails: ({
        readonly artworkCoverImage: {
            readonly responsiveImage: {
                readonly src: string;
                readonly width: any;
                readonly height: any;
                readonly alt: string | null;
                readonly title: string | null;
                readonly sizes: string;
                readonly base64: string | null;
            } | null;
        } | null;
        readonly artworkTitle: string | null;
        readonly artworkSlug: string | null;
        readonly artworkWriteup: {
            readonly value: any;
            readonly links: (string)[];
            readonly blocks: (string)[];
        } | null;
    })[];
};

export type GetHome$input = null;

export type GetHome$artifact = {
    "name": "GetHome";
    "kind": "HoudiniQuery";
    "hash": "0716d561df9190d5e76fe69858685a0c160d3ceb1999d6ce2800db741dde05db";
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
    artworkSlug
    artworkWriteup {
      value
      links
      blocks
    }
    id
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "allArtworkdetails": {
                "type": "ArtworkdetailRecord";
                "keyRaw": "allArtworkdetails";
                "selection": {
                    "fields": {
                        "artworkCoverImage": {
                            "type": "FileField";
                            "keyRaw": "artworkCoverImage";
                            "nullable": true;
                            "selection": {
                                "fields": {
                                    "responsiveImage": {
                                        "type": "ResponsiveImage";
                                        "keyRaw": "responsiveImage";
                                        "nullable": true;
                                        "selection": {
                                            "fields": {
                                                "src": {
                                                    "type": "String";
                                                    "keyRaw": "src";
                                                    "visible": true;
                                                };
                                                "width": {
                                                    "type": "IntType";
                                                    "keyRaw": "width";
                                                    "visible": true;
                                                };
                                                "height": {
                                                    "type": "IntType";
                                                    "keyRaw": "height";
                                                    "visible": true;
                                                };
                                                "alt": {
                                                    "type": "String";
                                                    "keyRaw": "alt";
                                                    "nullable": true;
                                                    "visible": true;
                                                };
                                                "title": {
                                                    "type": "String";
                                                    "keyRaw": "title";
                                                    "nullable": true;
                                                    "visible": true;
                                                };
                                                "sizes": {
                                                    "type": "String";
                                                    "keyRaw": "sizes";
                                                    "visible": true;
                                                };
                                                "base64": {
                                                    "type": "String";
                                                    "keyRaw": "base64";
                                                    "nullable": true;
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                    "id": {
                                        "type": "UploadId";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "artworkTitle": {
                            "type": "String";
                            "keyRaw": "artworkTitle";
                            "nullable": true;
                            "visible": true;
                        };
                        "artworkSlug": {
                            "type": "String";
                            "keyRaw": "artworkSlug";
                            "nullable": true;
                            "visible": true;
                        };
                        "artworkWriteup": {
                            "type": "ArtworkdetailModelArtworkWriteupField";
                            "keyRaw": "artworkWriteup";
                            "nullable": true;
                            "selection": {
                                "fields": {
                                    "value": {
                                        "type": "JsonField";
                                        "keyRaw": "value";
                                        "visible": true;
                                    };
                                    "links": {
                                        "type": "String";
                                        "keyRaw": "links";
                                        "visible": true;
                                    };
                                    "blocks": {
                                        "type": "String";
                                        "keyRaw": "blocks";
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "id": {
                            "type": "ItemId";
                            "keyRaw": "id";
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "policy": "CacheOrNetwork";
    "partial": false;
};