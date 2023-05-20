export type AboutPage = {
    readonly "input": AboutPage$input;
    readonly "result": AboutPage$result | undefined;
};

export type AboutPage$result = {
    readonly about: {
        readonly artistBiography: {
            readonly value: any;
            readonly links: (string)[];
            readonly blocks: (string)[];
        } | null;
        readonly artistEducation: ({
            readonly academicInstitution: string | null;
            readonly fieldOfStudy: string | null;
            readonly year: any | null;
        })[];
        readonly artistAward: ({
            readonly governingBody: string | null;
            readonly year: any | null;
            readonly id: any;
        })[];
        readonly artistTalk: ({
            readonly exhibitionYear: any | null;
            readonly exhibitionTitle: string | null;
            readonly exhibitionLocation: string | null;
            readonly exhibitionCountry: {
                readonly latitude: any;
                readonly longitude: any;
            } | null;
            readonly artworksPresented: ({
                readonly artworkTitle: string | null;
                readonly artworkSlug: string | null;
                readonly artworkYear: string | null;
            })[];
        })[];
        readonly artistWorkshopsAndResidencies: ({
            readonly exhibitionTitle: string | null;
            readonly exhibitionYear: any | null;
            readonly exhibitionLocation: string | null;
            readonly exhibitionCountry: {
                readonly latitude: any;
                readonly longitude: any;
            } | null;
            readonly artworksPresented: ({
                readonly artworkTitle: string | null;
                readonly id: any;
            })[];
            readonly id: any;
        })[];
        readonly pastExhibitions: ({
            readonly exhibitionTitle: string | null;
            readonly exhibitionLocation: string | null;
            readonly exhibitionYear: any | null;
            readonly id: any;
        })[];
        readonly pressAndMedia: ({
            readonly id: any;
            readonly pressMediaTitle: string | null;
            readonly url: string | null;
            readonly year: any | null;
        })[];
    } | null;
};

export type AboutPage$input = null;

export type AboutPage$artifact = {
    "name": "AboutPage";
    "kind": "HoudiniQuery";
    "hash": "d541ef84fbd679cab2017589e040b3a0a01ee9ea4a1b0775737ae26f66f5c1df";
    "raw": `query AboutPage {
  about {
    artistBiography {
      value
      links
      blocks
    }
    artistEducation {
      academicInstitution
      fieldOfStudy
      year
      id
    }
    artistAward {
      governingBody
      year
      id
    }
    artistTalk {
      exhibitionYear
      exhibitionTitle
      exhibitionLocation
      exhibitionCountry {
        latitude
        longitude
      }
      artworksPresented {
        artworkTitle
        artworkSlug
        artworkYear
        id
      }
      id
    }
    artistWorkshopsAndResidencies {
      exhibitionTitle
      exhibitionYear
      exhibitionLocation
      exhibitionCountry {
        latitude
        longitude
      }
      artworksPresented {
        artworkTitle
        id
      }
      id
    }
    pastExhibitions {
      exhibitionTitle
      exhibitionLocation
      exhibitionYear
      id
    }
    pressAndMedia {
      id
      pressMediaTitle
      url
      year
    }
    id
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "about": {
                "type": "AboutRecord";
                "keyRaw": "about";
                "nullable": true;
                "selection": {
                    "fields": {
                        "artistBiography": {
                            "type": "AboutModelArtistBiographyField";
                            "keyRaw": "artistBiography";
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
                        "artistEducation": {
                            "type": "ArtistEducationRecord";
                            "keyRaw": "artistEducation";
                            "selection": {
                                "fields": {
                                    "academicInstitution": {
                                        "type": "String";
                                        "keyRaw": "academicInstitution";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "fieldOfStudy": {
                                        "type": "String";
                                        "keyRaw": "fieldOfStudy";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "year": {
                                        "type": "IntType";
                                        "keyRaw": "year";
                                        "nullable": true;
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
                        "artistAward": {
                            "type": "ArtistAwardRecord";
                            "keyRaw": "artistAward";
                            "selection": {
                                "fields": {
                                    "governingBody": {
                                        "type": "String";
                                        "keyRaw": "governingBody";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "year": {
                                        "type": "IntType";
                                        "keyRaw": "year";
                                        "nullable": true;
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
                        "artistTalk": {
                            "type": "ExhibitionContentBlockRecord";
                            "keyRaw": "artistTalk";
                            "selection": {
                                "fields": {
                                    "exhibitionYear": {
                                        "type": "IntType";
                                        "keyRaw": "exhibitionYear";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "exhibitionTitle": {
                                        "type": "String";
                                        "keyRaw": "exhibitionTitle";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "exhibitionLocation": {
                                        "type": "String";
                                        "keyRaw": "exhibitionLocation";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "exhibitionCountry": {
                                        "type": "LatLonField";
                                        "keyRaw": "exhibitionCountry";
                                        "nullable": true;
                                        "selection": {
                                            "fields": {
                                                "latitude": {
                                                    "type": "FloatType";
                                                    "keyRaw": "latitude";
                                                    "visible": true;
                                                };
                                                "longitude": {
                                                    "type": "FloatType";
                                                    "keyRaw": "longitude";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                    "artworksPresented": {
                                        "type": "ArtworkdetailRecord";
                                        "keyRaw": "artworksPresented";
                                        "selection": {
                                            "fields": {
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
                                                "artworkYear": {
                                                    "type": "String";
                                                    "keyRaw": "artworkYear";
                                                    "nullable": true;
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
                                    "id": {
                                        "type": "ItemId";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "artistWorkshopsAndResidencies": {
                            "type": "ExhibitionContentBlockRecord";
                            "keyRaw": "artistWorkshopsAndResidencies";
                            "selection": {
                                "fields": {
                                    "exhibitionTitle": {
                                        "type": "String";
                                        "keyRaw": "exhibitionTitle";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "exhibitionYear": {
                                        "type": "IntType";
                                        "keyRaw": "exhibitionYear";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "exhibitionLocation": {
                                        "type": "String";
                                        "keyRaw": "exhibitionLocation";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "exhibitionCountry": {
                                        "type": "LatLonField";
                                        "keyRaw": "exhibitionCountry";
                                        "nullable": true;
                                        "selection": {
                                            "fields": {
                                                "latitude": {
                                                    "type": "FloatType";
                                                    "keyRaw": "latitude";
                                                    "visible": true;
                                                };
                                                "longitude": {
                                                    "type": "FloatType";
                                                    "keyRaw": "longitude";
                                                    "visible": true;
                                                };
                                            };
                                        };
                                        "visible": true;
                                    };
                                    "artworksPresented": {
                                        "type": "ArtworkdetailRecord";
                                        "keyRaw": "artworksPresented";
                                        "selection": {
                                            "fields": {
                                                "artworkTitle": {
                                                    "type": "String";
                                                    "keyRaw": "artworkTitle";
                                                    "nullable": true;
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
                                    "id": {
                                        "type": "ItemId";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                };
                            };
                            "visible": true;
                        };
                        "pastExhibitions": {
                            "type": "ExhibitionContentBlockRecord";
                            "keyRaw": "pastExhibitions";
                            "selection": {
                                "fields": {
                                    "exhibitionTitle": {
                                        "type": "String";
                                        "keyRaw": "exhibitionTitle";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "exhibitionLocation": {
                                        "type": "String";
                                        "keyRaw": "exhibitionLocation";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "exhibitionYear": {
                                        "type": "IntType";
                                        "keyRaw": "exhibitionYear";
                                        "nullable": true;
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
                        "pressAndMedia": {
                            "type": "ArtistPressMediaModelRecord";
                            "keyRaw": "pressAndMedia";
                            "selection": {
                                "fields": {
                                    "id": {
                                        "type": "ItemId";
                                        "keyRaw": "id";
                                        "visible": true;
                                    };
                                    "pressMediaTitle": {
                                        "type": "String";
                                        "keyRaw": "pressMediaTitle";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "url": {
                                        "type": "String";
                                        "keyRaw": "url";
                                        "nullable": true;
                                        "visible": true;
                                    };
                                    "year": {
                                        "type": "IntType";
                                        "keyRaw": "year";
                                        "nullable": true;
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