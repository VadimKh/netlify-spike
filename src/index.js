
import './index.css';
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'

import { Control, Preview } from './components'

CMS.registerPreviewStyle("https://fivetran.com/Main.css");
CMS.registerWidget('test', Control, Preview)
