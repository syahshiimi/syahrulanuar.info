import type { Record } from "./public/record";
import { AboutPage$result, AboutPage$input } from "../artifacts/AboutPage";
import { AboutPageStore } from "../plugins/houdini-svelte/stores/AboutPage";
import { GetHome$result, GetHome$input } from "../artifacts/GetHome";
import { GetHomeStore } from "../plugins/houdini-svelte/stores/GetHome";
import type { MuxThumbnailFormatType } from "$houdini/graphql/enums";
import type { VideoMp4Res } from "$houdini/graphql/enums";
import type { FaviconType } from "$houdini/graphql/enums";
import type { UploadOrderBy } from "$houdini/graphql/enums";
import type { ArtworkdetailModelOrderBy } from "$houdini/graphql/enums";
import type { UploadType } from "$houdini/graphql/enums";
import type { ResolutionType } from "$houdini/graphql/enums";
import type { UploadOrientation } from "$houdini/graphql/enums";
import type { ColorBucketType } from "$houdini/graphql/enums";
import type { ItemStatus } from "$houdini/graphql/enums";
import type { ImgixParamsTxtFit } from "$houdini/graphql/enums";
import type { ImgixParamsTxtClip } from "$houdini/graphql/enums";
import type { ImgixParamsTxtAlign } from "$houdini/graphql/enums";
import type { ImgixParamsTrim } from "$houdini/graphql/enums";
import type { ImgixParamsTransparency } from "$houdini/graphql/enums";
import type { ImgixParamsPalette } from "$houdini/graphql/enums";
import type { ImgixParamsMarkTile } from "$houdini/graphql/enums";
import type { ImgixParamsMarkFit } from "$houdini/graphql/enums";
import type { ImgixParamsMarkAlign } from "$houdini/graphql/enums";
import type { ImgixParamsIptc } from "$houdini/graphql/enums";
import type { ImgixParamsFm } from "$houdini/graphql/enums";
import type { ImgixParamsFlip } from "$houdini/graphql/enums";
import type { ImgixParamsFit } from "$houdini/graphql/enums";
import type { ImgixParamsFill } from "$houdini/graphql/enums";
import type { ImgixParamsCs } from "$houdini/graphql/enums";
import type { ImgixParamsCrop } from "$houdini/graphql/enums";
import type { ImgixParamsCh } from "$houdini/graphql/enums";
import type { ImgixParamsBlendSize } from "$houdini/graphql/enums";
import type { ImgixParamsBlendMode } from "$houdini/graphql/enums";
import type { ImgixParamsBlendFit } from "$houdini/graphql/enums";
import type { ImgixParamsBlendCrop } from "$houdini/graphql/enums";
import type { ImgixParamsBlendAlign } from "$houdini/graphql/enums";
import type { ImgixParamsAuto } from "$houdini/graphql/enums";
import type { ValueOf } from "$houdini/runtime/lib/types";
import type { SiteLocale } from "$houdini/graphql/enums";

type ImgixParams = {
    ar?: string | null | undefined;
    auto?: (ValueOf<typeof ImgixParamsAuto>)[] | null | undefined;
    bg?: string | null | undefined;
    bgRemove?: any | null | undefined;
    blend?: string | null | undefined;
    blendAlign?: (ValueOf<typeof ImgixParamsBlendAlign>)[] | null | undefined;
    blendAlpha?: any | null | undefined;
    blendColor?: string | null | undefined;
    blendCrop?: (ValueOf<typeof ImgixParamsBlendCrop>)[] | null | undefined;
    blendFit?: ValueOf<typeof ImgixParamsBlendFit> | null | undefined;
    blendH?: any | null | undefined;
    blendMode?: ValueOf<typeof ImgixParamsBlendMode> | null | undefined;
    blendPad?: any | null | undefined;
    blendSize?: ValueOf<typeof ImgixParamsBlendSize> | null | undefined;
    blendW?: any | null | undefined;
    blendX?: any | null | undefined;
    blendY?: any | null | undefined;
    blur?: any | null | undefined;
    border?: string | null | undefined;
    borderBottom?: any | null | undefined;
    borderLeft?: any | null | undefined;
    borderRadius?: string | null | undefined;
    borderRadiusInner?: string | null | undefined;
    borderRight?: any | null | undefined;
    borderTop?: any | null | undefined;
    bri?: any | null | undefined;
    ch?: (ValueOf<typeof ImgixParamsCh>)[] | null | undefined;
    chromasub?: any | null | undefined;
    colorquant?: any | null | undefined;
    colors?: any | null | undefined;
    con?: any | null | undefined;
    cornerRadius?: string | null | undefined;
    crop?: (ValueOf<typeof ImgixParamsCrop>)[] | null | undefined;
    cs?: ValueOf<typeof ImgixParamsCs> | null | undefined;
    dl?: string | null | undefined;
    dpi?: any | null | undefined;
    dpr?: any | null | undefined;
    duotone?: string | null | undefined;
    duotoneAlpha?: any | null | undefined;
    exp?: any | null | undefined;
    expires?: any | null | undefined;
    faceindex?: any | null | undefined;
    facepad?: any | null | undefined;
    faces?: any | null | undefined;
    fill?: ValueOf<typeof ImgixParamsFill> | null | undefined;
    fillColor?: string | null | undefined;
    fit?: ValueOf<typeof ImgixParamsFit> | null | undefined;
    flip?: ValueOf<typeof ImgixParamsFlip> | null | undefined;
    fm?: ValueOf<typeof ImgixParamsFm> | null | undefined;
    fpDebug?: any | null | undefined;
    fpX?: any | null | undefined;
    fpY?: any | null | undefined;
    fpZ?: any | null | undefined;
    fps?: any | null | undefined;
    frame?: string | null | undefined;
    gam?: any | null | undefined;
    gifQ?: any | null | undefined;
    gridColors?: string | null | undefined;
    gridSize?: any | null | undefined;
    h?: any | null | undefined;
    high?: any | null | undefined;
    htn?: any | null | undefined;
    hue?: any | null | undefined;
    interval?: any | null | undefined;
    invert?: any | null | undefined;
    iptc?: ValueOf<typeof ImgixParamsIptc> | null | undefined;
    loop?: any | null | undefined;
    lossless?: any | null | undefined;
    mark?: string | null | undefined;
    markAlign?: (ValueOf<typeof ImgixParamsMarkAlign>)[] | null | undefined;
    markAlpha?: any | null | undefined;
    markBase?: string | null | undefined;
    markFit?: ValueOf<typeof ImgixParamsMarkFit> | null | undefined;
    markH?: any | null | undefined;
    markPad?: any | null | undefined;
    markRot?: any | null | undefined;
    markScale?: any | null | undefined;
    markTile?: ValueOf<typeof ImgixParamsMarkTile> | null | undefined;
    markW?: any | null | undefined;
    markX?: any | null | undefined;
    markY?: any | null | undefined;
    mask?: string | null | undefined;
    maskBg?: string | null | undefined;
    maxH?: any | null | undefined;
    maxW?: any | null | undefined;
    minH?: any | null | undefined;
    minW?: any | null | undefined;
    monochrome?: string | null | undefined;
    nr?: any | null | undefined;
    nrs?: any | null | undefined;
    orient?: any | null | undefined;
    pad?: any | null | undefined;
    padBottom?: any | null | undefined;
    padLeft?: any | null | undefined;
    padRight?: any | null | undefined;
    padTop?: any | null | undefined;
    page?: any | null | undefined;
    palette?: ValueOf<typeof ImgixParamsPalette> | null | undefined;
    pdfAnnotation?: any | null | undefined;
    prefix?: string | null | undefined;
    px?: any | null | undefined;
    q?: any | null | undefined;
    rect?: string | null | undefined;
    reverse?: any | null | undefined;
    rot?: any | null | undefined;
    sat?: any | null | undefined;
    sepia?: any | null | undefined;
    shad?: any | null | undefined;
    sharp?: any | null | undefined;
    skip?: any | null | undefined;
    transparency?: ValueOf<typeof ImgixParamsTransparency> | null | undefined;
    trim?: ValueOf<typeof ImgixParamsTrim> | null | undefined;
    trimColor?: string | null | undefined;
    trimMd?: any | null | undefined;
    trimPad?: any | null | undefined;
    trimSd?: any | null | undefined;
    trimTol?: any | null | undefined;
    txt?: string | null | undefined;
    txtAlign?: (ValueOf<typeof ImgixParamsTxtAlign>)[] | null | undefined;
    txtClip?: (ValueOf<typeof ImgixParamsTxtClip>)[] | null | undefined;
    txtColor?: string | null | undefined;
    txtFit?: ValueOf<typeof ImgixParamsTxtFit> | null | undefined;
    txtFont?: string | null | undefined;
    txtLead?: any | null | undefined;
    txtLig?: any | null | undefined;
    txtLine?: any | null | undefined;
    txtLineColor?: string | null | undefined;
    txtPad?: any | null | undefined;
    txtShad?: any | null | undefined;
    txtSize?: any | null | undefined;
    txtTrack?: any | null | undefined;
    txtWidth?: any | null | undefined;
    txtX?: any | null | undefined;
    txtY?: any | null | undefined;
    usm?: any | null | undefined;
    usmrad?: any | null | undefined;
    vib?: any | null | undefined;
    w?: any | null | undefined;
};

type CreatedAtFilter = {
    eq?: any | null | undefined;
    exists?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
};

type PublishedAtFilter = {
    eq?: any | null | undefined;
    exists?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
};

type BooleanFilter = {
    eq?: any | null | undefined;
};

type StatusFilter = {
    eq?: ValueOf<typeof ItemStatus> | null | undefined;
    in?: (ValueOf<typeof ItemStatus> | null | undefined)[] | null | undefined;
    neq?: ValueOf<typeof ItemStatus> | null | undefined;
    notIn?: (ValueOf<typeof ItemStatus> | null | undefined)[] | null | undefined;
};

type UpdatedAtFilter = {
    eq?: any | null | undefined;
    exists?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
};

type FileFilter = {
    eq?: any | null | undefined;
    exists?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    neq?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
};

type GalleryFilter = {
    allIn?: (any | null | undefined)[] | null | undefined;
    anyIn?: (any | null | undefined)[] | null | undefined;
    eq?: (any | null | undefined)[] | null | undefined;
    exists?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
};

type StringMatchesFilter = {
    caseSensitive?: any | null | undefined;
    pattern: string;
    regexp?: any | null | undefined;
};

type TextFilter = {
    exists?: any | null | undefined;
    isBlank?: any | null | undefined;
    isPresent?: any | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type SeoFilter = {
    exists?: any | null | undefined;
};

type SlugFilter = {
    eq?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    neq?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
};

type StringFilter = {
    eq?: string | null | undefined;
    exists?: any | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    isBlank?: any | null | undefined;
    isPresent?: any | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    neq?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type StructuredTextFilter = {
    exists?: any | null | undefined;
    isBlank?: any | null | undefined;
    isPresent?: any | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type ItemIdFilter = {
    eq?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    neq?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
};

type ArtworkdetailModelFilter = {
    AND?: (ArtworkdetailModelFilter | null | undefined)[] | null | undefined;
    OR?: (ArtworkdetailModelFilter | null | undefined)[] | null | undefined;
    _createdAt?: CreatedAtFilter | null | undefined;
    _firstPublishedAt?: PublishedAtFilter | null | undefined;
    _isValid?: BooleanFilter | null | undefined;
    _publicationScheduledAt?: PublishedAtFilter | null | undefined;
    _publishedAt?: PublishedAtFilter | null | undefined;
    _status?: StatusFilter | null | undefined;
    _unpublishingScheduledAt?: PublishedAtFilter | null | undefined;
    _updatedAt?: UpdatedAtFilter | null | undefined;
    artworkCoverImage?: FileFilter | null | undefined;
    artworkImageGallery?: GalleryFilter | null | undefined;
    artworkMediums?: TextFilter | null | undefined;
    artworkSeoTags?: SeoFilter | null | undefined;
    artworkSlug?: SlugFilter | null | undefined;
    artworkTitle?: StringFilter | null | undefined;
    artworkWriteup?: StructuredTextFilter | null | undefined;
    artworkYear?: StringFilter | null | undefined;
    id?: ItemIdFilter | null | undefined;
};

type UploadCreatedAtFilter = {
    eq?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
};

type UploadUpdatedAtFilter = {
    eq?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
};

type UploadAltFilter = {
    eq?: string | null | undefined;
    exists?: any | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    neq?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type UploadAuthorFilter = {
    exists?: any | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type UploadBasenameFilter = {
    matches?: StringMatchesFilter | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type UploadColorsFilter = {
    allIn?: (ValueOf<typeof ColorBucketType> | null | undefined)[] | null | undefined;
    anyIn?: (ValueOf<typeof ColorBucketType> | null | undefined)[] | null | undefined;
    contains?: ValueOf<typeof ColorBucketType> | null | undefined;
    eq?: (ValueOf<typeof ColorBucketType> | null | undefined)[] | null | undefined;
    notIn?: (ValueOf<typeof ColorBucketType> | null | undefined)[] | null | undefined;
};

type UploadCopyrightFilter = {
    exists?: any | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type UploadFilenameFilter = {
    matches?: StringMatchesFilter | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type UploadFormatFilter = {
    eq?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    neq?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
};

type UploadHeightFilter = {
    eq?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
};

type UploadIdFilter = {
    eq?: any | null | undefined;
    in?: (any | null | undefined)[] | null | undefined;
    neq?: any | null | undefined;
    notIn?: (any | null | undefined)[] | null | undefined;
};

type InUseFilter = {
    eq?: any | null | undefined;
};

type UploadMd5Filter = {
    eq?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    neq?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
};

type UploadMimeTypeFilter = {
    eq?: string | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    neq?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type UploadNotesFilter = {
    exists?: any | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type OrientationFilter = {
    eq?: ValueOf<typeof UploadOrientation> | null | undefined;
    neq?: ValueOf<typeof UploadOrientation> | null | undefined;
};

type ResolutionFilter = {
    eq?: ValueOf<typeof ResolutionType> | null | undefined;
    in?: (ValueOf<typeof ResolutionType> | null | undefined)[] | null | undefined;
    neq?: ValueOf<typeof ResolutionType> | null | undefined;
    notIn?: (ValueOf<typeof ResolutionType> | null | undefined)[] | null | undefined;
};

type UploadSizeFilter = {
    eq?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
};

type UploadTagsFilter = {
    allIn?: (string)[] | null | undefined;
    anyIn?: (string)[] | null | undefined;
    contains?: string | null | undefined;
    eq?: (string)[] | null | undefined;
    notIn?: (string)[] | null | undefined;
};

type UploadTitleFilter = {
    eq?: string | null | undefined;
    exists?: any | null | undefined;
    in?: (string | null | undefined)[] | null | undefined;
    matches?: StringMatchesFilter | null | undefined;
    neq?: string | null | undefined;
    notIn?: (string | null | undefined)[] | null | undefined;
    notMatches?: StringMatchesFilter | null | undefined;
};

type TypeFilter = {
    eq?: ValueOf<typeof UploadType> | null | undefined;
    in?: (ValueOf<typeof UploadType> | null | undefined)[] | null | undefined;
    neq?: ValueOf<typeof UploadType> | null | undefined;
    notIn?: (ValueOf<typeof UploadType> | null | undefined)[] | null | undefined;
};

type UploadWidthFilter = {
    eq?: any | null | undefined;
    gt?: any | null | undefined;
    gte?: any | null | undefined;
    lt?: any | null | undefined;
    lte?: any | null | undefined;
    neq?: any | null | undefined;
};

type UploadFilter = {
    AND?: (UploadFilter | null | undefined)[] | null | undefined;
    OR?: (UploadFilter | null | undefined)[] | null | undefined;
    _createdAt?: UploadCreatedAtFilter | null | undefined;
    _updatedAt?: UploadUpdatedAtFilter | null | undefined;
    alt?: UploadAltFilter | null | undefined;
    author?: UploadAuthorFilter | null | undefined;
    basename?: UploadBasenameFilter | null | undefined;
    colors?: UploadColorsFilter | null | undefined;
    copyright?: UploadCopyrightFilter | null | undefined;
    filename?: UploadFilenameFilter | null | undefined;
    format?: UploadFormatFilter | null | undefined;
    height?: UploadHeightFilter | null | undefined;
    id?: UploadIdFilter | null | undefined;
    inUse?: InUseFilter | null | undefined;
    md5?: UploadMd5Filter | null | undefined;
    mimeType?: UploadMimeTypeFilter | null | undefined;
    notes?: UploadNotesFilter | null | undefined;
    orientation?: OrientationFilter | null | undefined;
    resolution?: ResolutionFilter | null | undefined;
    size?: UploadSizeFilter | null | undefined;
    smartTags?: UploadTagsFilter | null | undefined;
    tags?: UploadTagsFilter | null | undefined;
    title?: UploadTitleFilter | null | undefined;
    type?: TypeFilter | null | undefined;
    width?: UploadWidthFilter | null | undefined;
};

export declare type CacheTypeDef = {
    types: {
        AboutModelArtistBiographyField: {
            idFields: never;
            fields: {
                blocks: {
                    type: (string)[];
                    args: never;
                };
                links: {
                    type: (string)[];
                    args: never;
                };
                value: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        AboutRecord: {
            idFields: {
                id: any;
            };
            fields: {
                _createdAt: {
                    type: any;
                    args: never;
                };
                _firstPublishedAt: {
                    type: any | null;
                    args: never;
                };
                _isValid: {
                    type: any;
                    args: never;
                };
                _modelApiKey: {
                    type: string;
                    args: never;
                };
                _publicationScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _publishedAt: {
                    type: any | null;
                    args: never;
                };
                _seoMetaTags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: {
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _status: {
                    type: ItemStatus;
                    args: never;
                };
                _unpublishingScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _updatedAt: {
                    type: any;
                    args: never;
                };
                artistAward: {
                    type: (Record<CacheTypeDef, "ArtistAwardRecord">)[];
                    args: never;
                };
                artistBiography: {
                    type: Record<CacheTypeDef, "AboutModelArtistBiographyField"> | null;
                    args: never;
                };
                artistEducation: {
                    type: (Record<CacheTypeDef, "ArtistEducationRecord">)[];
                    args: never;
                };
                artistTalk: {
                    type: (Record<CacheTypeDef, "ExhibitionContentBlockRecord">)[];
                    args: never;
                };
                artistWorkshopsAndResidencies: {
                    type: (Record<CacheTypeDef, "ExhibitionContentBlockRecord">)[];
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                pastExhibitions: {
                    type: (Record<CacheTypeDef, "ExhibitionContentBlockRecord">)[];
                    args: never;
                };
                pressAndMedia: {
                    type: (Record<CacheTypeDef, "ArtistPressMediaModelRecord">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        ArtistAwardRecord: {
            idFields: {
                id: any;
            };
            fields: {
                _createdAt: {
                    type: any;
                    args: never;
                };
                _firstPublishedAt: {
                    type: any | null;
                    args: never;
                };
                _isValid: {
                    type: any;
                    args: never;
                };
                _modelApiKey: {
                    type: string;
                    args: never;
                };
                _publicationScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _publishedAt: {
                    type: any | null;
                    args: never;
                };
                _seoMetaTags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: {
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _status: {
                    type: ItemStatus;
                    args: never;
                };
                _unpublishingScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _updatedAt: {
                    type: any;
                    args: never;
                };
                awardTitle: {
                    type: string | null;
                    args: never;
                };
                governingBody: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                year: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ArtistEducationRecord: {
            idFields: {
                id: any;
            };
            fields: {
                _createdAt: {
                    type: any;
                    args: never;
                };
                _firstPublishedAt: {
                    type: any | null;
                    args: never;
                };
                _isValid: {
                    type: any;
                    args: never;
                };
                _modelApiKey: {
                    type: string;
                    args: never;
                };
                _publicationScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _publishedAt: {
                    type: any | null;
                    args: never;
                };
                _seoMetaTags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: {
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _status: {
                    type: ItemStatus;
                    args: never;
                };
                _unpublishingScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _updatedAt: {
                    type: any;
                    args: never;
                };
                academicInstitution: {
                    type: string | null;
                    args: never;
                };
                fieldOfStudy: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                year: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ArtistPressMediaModelRecord: {
            idFields: {
                id: any;
            };
            fields: {
                _createdAt: {
                    type: any;
                    args: never;
                };
                _firstPublishedAt: {
                    type: any | null;
                    args: never;
                };
                _isValid: {
                    type: any;
                    args: never;
                };
                _modelApiKey: {
                    type: string;
                    args: never;
                };
                _publicationScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _publishedAt: {
                    type: any | null;
                    args: never;
                };
                _seoMetaTags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: {
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _status: {
                    type: ItemStatus;
                    args: never;
                };
                _unpublishingScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _updatedAt: {
                    type: any;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                pressMediaTitle: {
                    type: string | null;
                    args: never;
                };
                url: {
                    type: string | null;
                    args: never;
                };
                year: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        ArtistTalkRecord: {
            idFields: {
                id: any;
            };
            fields: {
                _createdAt: {
                    type: any;
                    args: never;
                };
                _firstPublishedAt: {
                    type: any | null;
                    args: never;
                };
                _isValid: {
                    type: any;
                    args: never;
                };
                _modelApiKey: {
                    type: string;
                    args: never;
                };
                _publicationScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _publishedAt: {
                    type: any | null;
                    args: never;
                };
                _seoMetaTags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: {
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _status: {
                    type: ItemStatus;
                    args: never;
                };
                _unpublishingScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _updatedAt: {
                    type: any;
                    args: never;
                };
                artworkPresented: {
                    type: string;
                    args: never;
                };
                exhibitionCountry: {
                    type: Record<CacheTypeDef, "LatLonField"> | null;
                    args: never;
                };
                exhibitionLocation: {
                    type: string | null;
                    args: never;
                };
                exhibitionTitle: {
                    type: string | null;
                    args: never;
                };
                exhibitionYear: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        ArtworkdetailModelArtworkWriteupField: {
            idFields: never;
            fields: {
                blocks: {
                    type: (string)[];
                    args: never;
                };
                links: {
                    type: (string)[];
                    args: never;
                };
                value: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        ArtworkdetailRecord: {
            idFields: {
                id: any;
            };
            fields: {
                _createdAt: {
                    type: any;
                    args: never;
                };
                _firstPublishedAt: {
                    type: any | null;
                    args: never;
                };
                _isValid: {
                    type: any;
                    args: never;
                };
                _modelApiKey: {
                    type: string;
                    args: never;
                };
                _publicationScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _publishedAt: {
                    type: any | null;
                    args: never;
                };
                _seoMetaTags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: {
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _status: {
                    type: ItemStatus;
                    args: never;
                };
                _unpublishingScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _updatedAt: {
                    type: any;
                    args: never;
                };
                artworkCoverImage: {
                    type: Record<CacheTypeDef, "FileField"> | null;
                    args: never;
                };
                artworkImageGallery: {
                    type: (Record<CacheTypeDef, "FileField">)[];
                    args: never;
                };
                artworkMediums: {
                    type: string | null;
                    args: {
                        markdown?: boolean | null | undefined;
                    };
                };
                artworkSeoTags: {
                    type: Record<CacheTypeDef, "SeoField"> | null;
                    args: never;
                };
                artworkSlug: {
                    type: string | null;
                    args: never;
                };
                artworkTitle: {
                    type: string | null;
                    args: never;
                };
                artworkWriteup: {
                    type: Record<CacheTypeDef, "ArtworkdetailModelArtworkWriteupField"> | null;
                    args: never;
                };
                artworkYear: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        CollectionMetadata: {
            idFields: never;
            fields: {
                count: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        ColorField: {
            idFields: never;
            fields: {
                alpha: {
                    type: any;
                    args: never;
                };
                blue: {
                    type: any;
                    args: never;
                };
                cssRgb: {
                    type: string;
                    args: never;
                };
                green: {
                    type: any;
                    args: never;
                };
                hex: {
                    type: string;
                    args: never;
                };
                red: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        ExhibitionContentBlockRecord: {
            idFields: {
                id: any;
            };
            fields: {
                _createdAt: {
                    type: any;
                    args: never;
                };
                _firstPublishedAt: {
                    type: any | null;
                    args: never;
                };
                _isValid: {
                    type: any;
                    args: never;
                };
                _modelApiKey: {
                    type: string;
                    args: never;
                };
                _publicationScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _publishedAt: {
                    type: any | null;
                    args: never;
                };
                _seoMetaTags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: {
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _status: {
                    type: ItemStatus;
                    args: never;
                };
                _unpublishingScheduledAt: {
                    type: any | null;
                    args: never;
                };
                _updatedAt: {
                    type: any;
                    args: never;
                };
                artworksPresented: {
                    type: (Record<CacheTypeDef, "ArtworkdetailRecord">)[];
                    args: never;
                };
                exhibitionCountry: {
                    type: Record<CacheTypeDef, "LatLonField"> | null;
                    args: never;
                };
                exhibitionLocation: {
                    type: string | null;
                    args: never;
                };
                exhibitionTitle: {
                    type: string | null;
                    args: never;
                };
                exhibitionYear: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        FileField: {
            idFields: {
                id: any;
            };
            fields: {
                _createdAt: {
                    type: any;
                    args: never;
                };
                _updatedAt: {
                    type: any;
                    args: never;
                };
                alt: {
                    type: string | null;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                author: {
                    type: string | null;
                    args: never;
                };
                basename: {
                    type: string;
                    args: never;
                };
                blurUpThumb: {
                    type: string | null;
                    args: {
                        imgixParams?: ImgixParams | null | undefined;
                        punch: number;
                        quality: number;
                        size: number;
                    };
                };
                blurhash: {
                    type: string | null;
                    args: never;
                };
                colors: {
                    type: (Record<CacheTypeDef, "ColorField">)[];
                    args: never;
                };
                copyright: {
                    type: string | null;
                    args: never;
                };
                customData: {
                    type: any;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                exifInfo: {
                    type: any;
                    args: never;
                };
                filename: {
                    type: string;
                    args: never;
                };
                focalPoint: {
                    type: Record<CacheTypeDef, "focalPoint"> | null;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                format: {
                    type: string;
                    args: never;
                };
                height: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: any;
                    args: never;
                };
                md5: {
                    type: string;
                    args: never;
                };
                mimeType: {
                    type: string;
                    args: never;
                };
                notes: {
                    type: string | null;
                    args: never;
                };
                responsiveImage: {
                    type: Record<CacheTypeDef, "ResponsiveImage"> | null;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        imgixParams?: ImgixParams | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                        sizes?: string | null | undefined;
                    };
                };
                size: {
                    type: any;
                    args: never;
                };
                smartTags: {
                    type: (string)[];
                    args: never;
                };
                tags: {
                    type: (string)[];
                    args: never;
                };
                thumbhash: {
                    type: string | null;
                    args: never;
                };
                title: {
                    type: string | null;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                url: {
                    type: string;
                    args: {
                        imgixParams?: ImgixParams | null | undefined;
                    };
                };
                video: {
                    type: Record<CacheTypeDef, "UploadVideoField"> | null;
                    args: never;
                };
                width: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        GlobalSeoField: {
            idFields: never;
            fields: {
                facebookPageUrl: {
                    type: string | null;
                    args: never;
                };
                fallbackSeo: {
                    type: Record<CacheTypeDef, "SeoField"> | null;
                    args: never;
                };
                siteName: {
                    type: string | null;
                    args: never;
                };
                titleSuffix: {
                    type: string | null;
                    args: never;
                };
                twitterAccount: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        LatLonField: {
            idFields: never;
            fields: {
                latitude: {
                    type: any;
                    args: never;
                };
                longitude: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                _allArtworkdetailsMeta: {
                    type: Record<CacheTypeDef, "CollectionMetadata">;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        filter?: ArtworkdetailModelFilter | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _allUploadsMeta: {
                    type: Record<CacheTypeDef, "CollectionMetadata">;
                    args: {
                        filter?: UploadFilter | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                _site: {
                    type: Record<CacheTypeDef, "Site">;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                about: {
                    type: Record<CacheTypeDef, "AboutRecord"> | null;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                allArtworkdetails: {
                    type: (Record<CacheTypeDef, "ArtworkdetailRecord">)[];
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        filter?: ArtworkdetailModelFilter | null | undefined;
                        first?: any | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                        orderBy?: (ValueOf<typeof ArtworkdetailModelOrderBy> | null | undefined)[] | null | undefined;
                        skip?: any | null | undefined;
                    };
                };
                allUploads: {
                    type: (Record<CacheTypeDef, "FileField">)[];
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        filter?: UploadFilter | null | undefined;
                        first?: any | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                        orderBy?: (ValueOf<typeof UploadOrderBy> | null | undefined)[] | null | undefined;
                        skip?: any | null | undefined;
                    };
                };
                artworkdetail: {
                    type: Record<CacheTypeDef, "ArtworkdetailRecord"> | null;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        filter?: ArtworkdetailModelFilter | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                        orderBy?: (ValueOf<typeof ArtworkdetailModelOrderBy> | null | undefined)[] | null | undefined;
                    };
                };
                upload: {
                    type: Record<CacheTypeDef, "FileField"> | null;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        filter?: UploadFilter | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                        orderBy?: (ValueOf<typeof UploadOrderBy> | null | undefined)[] | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        ResponsiveImage: {
            idFields: never;
            fields: {
                alt: {
                    type: string | null;
                    args: never;
                };
                aspectRatio: {
                    type: any;
                    args: never;
                };
                base64: {
                    type: string | null;
                    args: never;
                };
                bgColor: {
                    type: string | null;
                    args: never;
                };
                height: {
                    type: any;
                    args: never;
                };
                sizes: {
                    type: string;
                    args: never;
                };
                src: {
                    type: string;
                    args: never;
                };
                srcSet: {
                    type: string;
                    args: never;
                };
                title: {
                    type: string | null;
                    args: never;
                };
                webpSrcSet: {
                    type: string;
                    args: never;
                };
                width: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
        SeoField: {
            idFields: never;
            fields: {
                description: {
                    type: string | null;
                    args: never;
                };
                image: {
                    type: Record<CacheTypeDef, "FileField"> | null;
                    args: never;
                };
                title: {
                    type: string | null;
                    args: never;
                };
                twitterCard: {
                    type: string | null;
                    args: never;
                };
            };
            fragments: [];
        };
        Site: {
            idFields: never;
            fields: {
                favicon: {
                    type: Record<CacheTypeDef, "FileField"> | null;
                    args: never;
                };
                faviconMetaTags: {
                    type: (Record<CacheTypeDef, "Tag">)[];
                    args: {
                        variants?: (ValueOf<typeof FaviconType> | null | undefined)[] | null | undefined;
                    };
                };
                globalSeo: {
                    type: Record<CacheTypeDef, "GlobalSeoField"> | null;
                    args: {
                        fallbackLocales?: (ValueOf<typeof SiteLocale>)[] | null | undefined;
                        locale?: ValueOf<typeof SiteLocale> | null | undefined;
                    };
                };
                locales: {
                    type: (SiteLocale)[];
                    args: never;
                };
            };
            fragments: [];
        };
        Tag: {
            idFields: never;
            fields: {
                attributes: {
                    type: any | null;
                    args: never;
                };
                content: {
                    type: string | null;
                    args: never;
                };
                tag: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        UploadVideoField: {
            idFields: never;
            fields: {
                duration: {
                    type: number | null;
                    args: never;
                };
                framerate: {
                    type: number | null;
                    args: never;
                };
                mp4Url: {
                    type: string | null;
                    args: {
                        exactRes?: ValueOf<typeof VideoMp4Res> | null | undefined;
                        res?: ValueOf<typeof VideoMp4Res> | null | undefined;
                    };
                };
                muxAssetId: {
                    type: string;
                    args: never;
                };
                muxPlaybackId: {
                    type: string;
                    args: never;
                };
                streamingUrl: {
                    type: string;
                    args: never;
                };
                thumbnailUrl: {
                    type: string;
                    args: {
                        format?: ValueOf<typeof MuxThumbnailFormatType> | null | undefined;
                    };
                };
            };
            fragments: [];
        };
        focalPoint: {
            idFields: never;
            fields: {
                x: {
                    type: any;
                    args: never;
                };
                y: {
                    type: any;
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[GetHomeStore, GetHome$result, GetHome$input], [AboutPageStore, AboutPage$result, AboutPage$input]];
};