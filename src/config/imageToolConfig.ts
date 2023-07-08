import type { StrapiEditorJS } from "@xenobytezero/strapi-plugin-react-editorjs/types";

export function createStrapiImageToolConfig(ejs: StrapiEditorJS) {
    return {
        field: "files.image",
        additionalRequestHeaders: {
          "Authorization": `Bearer ${ejs.authToken}`
        },
        endpoints: {
          byUrl: `${ejs.pluginEndpoint}/image/byUrl`,
        },
        uploader: {
          async uploadByFile(file: string | Blob) {
            const formData = new FormData();
            formData.append("data", JSON.stringify({}));
            formData.append("files.image", file);

            const { data } = await ejs.fetchClient.post(`${ejs.pluginEndpoint}/image/byFile`, formData);
            
            return data
          },
        }
    }
}