import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import MediaLibAdapterTool from './tools/MediaLibAdapter'

import type { CreateToolsFunction } from 'strapi-plugin-react-editorjs/types'

const createTools: CreateToolsFunction = (ejs) => {

    return {
        embed: Embed,
        table: {
          class: Table,
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        warning: {
          class: Warning,
          inlineToolbar: true,
          config: {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message',
          },
        },
        code: Code,
        LinkTool: {
          class: LinkTool,
          config: {
            endpoint: `${ejs.pluginEndpoint}/link`,
          },
        },
        raw: {
          class: Raw,
          inlineToolbar: true,
        },
        header: {
          class: Header,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          config: {
            quotePlaceholder: 'Quote',
            captionPlaceholder: 'Quote`s author',
          },
        },
        marker: {
          class: Marker,
          inlineToolbar: true,
        },
        checklist: {
          class: CheckList,
          inlineToolbar: true,
        },
        delimiter: Delimiter,
        inlineCode: InlineCode,
        mediaLib: {
            // Can't get the tool to implement BlockToolConstructable correctly
            // so have to cast to any
            class: MediaLibAdapterTool as any,
            config: {
                mediaLibToggleFunc: ejs.mediaLib.toggle
            }
        }
      }
}


export default createTools
