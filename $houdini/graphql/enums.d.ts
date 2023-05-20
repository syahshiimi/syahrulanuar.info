
type ValuesOf<T> = T[keyof T]
	
export declare const ArtworkdetailModelOrderBy: {
    readonly _createdAt_ASC: "_createdAt_ASC";
    readonly _createdAt_DESC: "_createdAt_DESC";
    readonly _firstPublishedAt_ASC: "_firstPublishedAt_ASC";
    readonly _firstPublishedAt_DESC: "_firstPublishedAt_DESC";
    readonly _isValid_ASC: "_isValid_ASC";
    readonly _isValid_DESC: "_isValid_DESC";
    readonly _publicationScheduledAt_ASC: "_publicationScheduledAt_ASC";
    readonly _publicationScheduledAt_DESC: "_publicationScheduledAt_DESC";
    readonly _publishedAt_ASC: "_publishedAt_ASC";
    readonly _publishedAt_DESC: "_publishedAt_DESC";
    readonly _status_ASC: "_status_ASC";
    readonly _status_DESC: "_status_DESC";
    readonly _unpublishingScheduledAt_ASC: "_unpublishingScheduledAt_ASC";
    readonly _unpublishingScheduledAt_DESC: "_unpublishingScheduledAt_DESC";
    readonly _updatedAt_ASC: "_updatedAt_ASC";
    readonly _updatedAt_DESC: "_updatedAt_DESC";
    readonly artworkTitle_ASC: "artworkTitle_ASC";
    readonly artworkTitle_DESC: "artworkTitle_DESC";
    readonly artworkYear_ASC: "artworkYear_ASC";
    readonly artworkYear_DESC: "artworkYear_DESC";
    readonly id_ASC: "id_ASC";
    readonly id_DESC: "id_DESC";
}

export type ArtworkdetailModelOrderBy$options = ValuesOf<typeof ArtworkdetailModelOrderBy>
 
export declare const ColorBucketType: {
    readonly black: "black";
    readonly blue: "blue";
    readonly brown: "brown";
    readonly cyan: "cyan";
    readonly green: "green";
    readonly grey: "grey";
    readonly orange: "orange";
    readonly pink: "pink";
    readonly purple: "purple";
    readonly red: "red";
    readonly white: "white";
    readonly yellow: "yellow";
}

export type ColorBucketType$options = ValuesOf<typeof ColorBucketType>
 
export declare const FaviconType: {
    readonly appleTouchIcon: "appleTouchIcon";
    readonly icon: "icon";
    readonly msApplication: "msApplication";
}

export type FaviconType$options = ValuesOf<typeof FaviconType>
 
export declare const ImgixParamsAuto: {
    readonly compress: "compress";
    readonly enhance: "enhance";
    readonly format: "format";
    readonly redeye: "redeye";
}

export type ImgixParamsAuto$options = ValuesOf<typeof ImgixParamsAuto>
 
export declare const ImgixParamsBlendAlign: {
    readonly bottom: "bottom";
    readonly center: "center";
    readonly left: "left";
    readonly middle: "middle";
    readonly right: "right";
    readonly top: "top";
}

export type ImgixParamsBlendAlign$options = ValuesOf<typeof ImgixParamsBlendAlign>
 
export declare const ImgixParamsBlendCrop: {
    readonly bottom: "bottom";
    readonly faces: "faces";
    readonly left: "left";
    readonly right: "right";
    readonly top: "top";
}

export type ImgixParamsBlendCrop$options = ValuesOf<typeof ImgixParamsBlendCrop>
 
export declare const ImgixParamsBlendFit: {
    readonly clamp: "clamp";
    readonly clip: "clip";
    readonly crop: "crop";
    readonly max: "max";
    readonly scale: "scale";
}

export type ImgixParamsBlendFit$options = ValuesOf<typeof ImgixParamsBlendFit>
 
export declare const ImgixParamsBlendMode: {
    readonly burn: "burn";
    readonly color: "color";
    readonly darken: "darken";
    readonly difference: "difference";
    readonly dodge: "dodge";
    readonly exclusion: "exclusion";
    readonly hardlight: "hardlight";
    readonly hue: "hue";
    readonly lighten: "lighten";
    readonly luminosity: "luminosity";
    readonly multiply: "multiply";
    readonly normal: "normal";
    readonly overlay: "overlay";
    readonly saturation: "saturation";
    readonly screen: "screen";
    readonly softlight: "softlight";
}

export type ImgixParamsBlendMode$options = ValuesOf<typeof ImgixParamsBlendMode>
 
export declare const ImgixParamsBlendSize: {
    readonly inherit: "inherit";
}

export type ImgixParamsBlendSize$options = ValuesOf<typeof ImgixParamsBlendSize>
 
export declare const ImgixParamsCh: {
    readonly dpr: "dpr";
    readonly saveData: "saveData";
    readonly width: "width";
}

export type ImgixParamsCh$options = ValuesOf<typeof ImgixParamsCh>
 
export declare const ImgixParamsCrop: {
    readonly bottom: "bottom";
    readonly edges: "edges";
    readonly entropy: "entropy";
    readonly faces: "faces";
    readonly focalpoint: "focalpoint";
    readonly left: "left";
    readonly right: "right";
    readonly top: "top";
}

export type ImgixParamsCrop$options = ValuesOf<typeof ImgixParamsCrop>
 
export declare const ImgixParamsCs: {
    readonly adobergb1998: "adobergb1998";
    readonly srgb: "srgb";
    readonly strip: "strip";
    readonly tinysrgb: "tinysrgb";
}

export type ImgixParamsCs$options = ValuesOf<typeof ImgixParamsCs>
 
export declare const ImgixParamsFill: {
    readonly blur: "blur";
    readonly solid: "solid";
}

export type ImgixParamsFill$options = ValuesOf<typeof ImgixParamsFill>
 
export declare const ImgixParamsFit: {
    readonly clamp: "clamp";
    readonly clip: "clip";
    readonly crop: "crop";
    readonly facearea: "facearea";
    readonly fill: "fill";
    readonly fillmax: "fillmax";
    readonly max: "max";
    readonly min: "min";
    readonly scale: "scale";
}

export type ImgixParamsFit$options = ValuesOf<typeof ImgixParamsFit>
 
export declare const ImgixParamsFlip: {
    readonly h: "h";
    readonly hv: "hv";
    readonly v: "v";
}

export type ImgixParamsFlip$options = ValuesOf<typeof ImgixParamsFlip>
 
export declare const ImgixParamsFm: {
    readonly avif: "avif";
    readonly blurhash: "blurhash";
    readonly gif: "gif";
    readonly jp2: "jp2";
    readonly jpg: "jpg";
    readonly json: "json";
    readonly jxr: "jxr";
    readonly mp4: "mp4";
    readonly pjpg: "pjpg";
    readonly png: "png";
    readonly png8: "png8";
    readonly png32: "png32";
    readonly webm: "webm";
    readonly webp: "webp";
}

export type ImgixParamsFm$options = ValuesOf<typeof ImgixParamsFm>
 
export declare const ImgixParamsIptc: {
    readonly allow: "allow";
    readonly block: "block";
}

export type ImgixParamsIptc$options = ValuesOf<typeof ImgixParamsIptc>
 
export declare const ImgixParamsMarkAlign: {
    readonly bottom: "bottom";
    readonly center: "center";
    readonly left: "left";
    readonly middle: "middle";
    readonly right: "right";
    readonly top: "top";
}

export type ImgixParamsMarkAlign$options = ValuesOf<typeof ImgixParamsMarkAlign>
 
export declare const ImgixParamsMarkFit: {
    readonly clip: "clip";
    readonly crop: "crop";
    readonly fill: "fill";
    readonly max: "max";
    readonly scale: "scale";
}

export type ImgixParamsMarkFit$options = ValuesOf<typeof ImgixParamsMarkFit>
 
export declare const ImgixParamsMarkTile: {
    readonly grid: "grid";
}

export type ImgixParamsMarkTile$options = ValuesOf<typeof ImgixParamsMarkTile>
 
export declare const ImgixParamsPalette: {
    readonly css: "css";
    readonly json: "json";
}

export type ImgixParamsPalette$options = ValuesOf<typeof ImgixParamsPalette>
 
export declare const ImgixParamsTransparency: {
    readonly grid: "grid";
}

export type ImgixParamsTransparency$options = ValuesOf<typeof ImgixParamsTransparency>
 
export declare const ImgixParamsTrim: {
    readonly auto: "auto";
    readonly color: "color";
}

export type ImgixParamsTrim$options = ValuesOf<typeof ImgixParamsTrim>
 
export declare const ImgixParamsTxtAlign: {
    readonly bottom: "bottom";
    readonly center: "center";
    readonly left: "left";
    readonly middle: "middle";
    readonly right: "right";
    readonly top: "top";
}

export type ImgixParamsTxtAlign$options = ValuesOf<typeof ImgixParamsTxtAlign>
 
export declare const ImgixParamsTxtClip: {
    readonly ellipsis: "ellipsis";
    readonly end: "end";
    readonly middle: "middle";
    readonly start: "start";
}

export type ImgixParamsTxtClip$options = ValuesOf<typeof ImgixParamsTxtClip>
 
export declare const ImgixParamsTxtFit: {
    readonly max: "max";
}

export type ImgixParamsTxtFit$options = ValuesOf<typeof ImgixParamsTxtFit>
 
export declare const ItemStatus: {
    readonly draft: "draft";
    readonly published: "published";
    readonly updated: "updated";
}

export type ItemStatus$options = ValuesOf<typeof ItemStatus>
 
export declare const MuxThumbnailFormatType: {
    readonly gif: "gif";
    readonly jpg: "jpg";
    readonly png: "png";
}

export type MuxThumbnailFormatType$options = ValuesOf<typeof MuxThumbnailFormatType>
 
export declare const ResolutionType: {
    readonly icon: "icon";
    readonly large: "large";
    readonly medium: "medium";
    readonly small: "small";
}

export type ResolutionType$options = ValuesOf<typeof ResolutionType>
 
export declare const SiteLocale: {
    readonly en: "en";
}

export type SiteLocale$options = ValuesOf<typeof SiteLocale>
 
export declare const UploadOrderBy: {
    readonly _createdAt_ASC: "_createdAt_ASC";
    readonly _createdAt_DESC: "_createdAt_DESC";
    readonly _updatedAt_ASC: "_updatedAt_ASC";
    readonly _updatedAt_DESC: "_updatedAt_DESC";
    readonly basename_ASC: "basename_ASC";
    readonly basename_DESC: "basename_DESC";
    readonly filename_ASC: "filename_ASC";
    readonly filename_DESC: "filename_DESC";
    readonly format_ASC: "format_ASC";
    readonly format_DESC: "format_DESC";
    readonly id_ASC: "id_ASC";
    readonly id_DESC: "id_DESC";
    readonly mimeType_ASC: "mimeType_ASC";
    readonly mimeType_DESC: "mimeType_DESC";
    readonly resolution_ASC: "resolution_ASC";
    readonly resolution_DESC: "resolution_DESC";
    readonly size_ASC: "size_ASC";
    readonly size_DESC: "size_DESC";
}

export type UploadOrderBy$options = ValuesOf<typeof UploadOrderBy>
 
export declare const UploadOrientation: {
    readonly landscape: "landscape";
    readonly portrait: "portrait";
    readonly square: "square";
}

export type UploadOrientation$options = ValuesOf<typeof UploadOrientation>
 
export declare const UploadType: {
    readonly archive: "archive";
    readonly audio: "audio";
    readonly image: "image";
    readonly pdfdocument: "pdfdocument";
    readonly presentation: "presentation";
    readonly richtext: "richtext";
    readonly spreadsheet: "spreadsheet";
    readonly video: "video";
}

export type UploadType$options = ValuesOf<typeof UploadType>
 
export declare const VideoMp4Res: {
    readonly high: "high";
    readonly low: "low";
    readonly medium: "medium";
}

export type VideoMp4Res$options = ValuesOf<typeof VideoMp4Res>
 