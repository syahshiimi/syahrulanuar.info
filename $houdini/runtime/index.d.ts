import { AboutPageStore } from "../plugins/houdini-svelte/stores/AboutPage";
import { GetHomeStore } from "../plugins/houdini-svelte/stores/GetHome";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "query AboutPage {\n\tabout {\n\t\tartistBiography {\n\t\t\tvalue\n\t\t\tlinks\n\t\t\tblocks\n\t\t}\n\t\tartistEducation {\n\t\t\tacademicInstitution\n\t\t\tfieldOfStudy\n\t\t\tyear\n\t\t}\n\t\tartistAward {\n\t\t\tgoverningBody\n\t\t\tyear\n\t\t\tid\n\t\t}\n\t\tartistTalk {\n\t\t\texhibitionYear\n\t\t\texhibitionTitle\n\t\t\texhibitionLocation\n\t\t\texhibitionCountry {\n\t\t\t\tlatitude\n\t\t\t\tlongitude\n\t\t\t}\n\t\t\tartworksPresented {\n\t\t\t\tartworkTitle\n\t\t\t\tartworkSlug\n\t\t\t\tartworkYear\n\t\t\t}\n\t\t}\n\t\tartistWorkshopsAndResidencies {\n\t\t\texhibitionTitle\n\t\t\texhibitionYear\n\t\t\texhibitionLocation\n\t\t\texhibitionCountry {\n\t\t\t\tlatitude\n\t\t\t\tlongitude\n\t\t\t}\n\t\t\tartworksPresented {\n\t\t\t\tartworkTitle\n\t\t\t\tid\n\t\t\t}\n\t\t\tid\n\t\t}\n\t\tpastExhibitions {\n\t\t\texhibitionTitle\n\t\t\texhibitionLocation\n\t\t\texhibitionYear\n\t\t\tid\n\t\t}\n\t\tpressAndMedia {\n\t\t\tid\n\t\t\tpressMediaTitle\n\t\t\turl\n\t\t\tyear\n\t\t}\n\t}\n}\n"
): AboutPageStore;

export function graphql(
    str: "query GetHome {\n\tallArtworkdetails {\n\t\tartworkCoverImage {\n\t\t\tresponsiveImage {\n\t\t\t\tsrc\n\t\t\t\twidth\n\t\t\t\theight\n\t\t\t\talt\n\t\t\t\ttitle\n\t\t\t\tsizes\n\t\t\t\tbase64\n\t\t\t}\n\t\t}\n\t\tartworkTitle\n\t}\n}\n"
): GetHomeStore;

export declare function graphql<_Payload>(str: TemplateStringsArray): _Payload;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;