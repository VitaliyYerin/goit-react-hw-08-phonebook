import { createGlobalStyle } from 'styled-components';
import LeHavreLayersDblLine from './LeHavreLayers-DblLine/LeHavreLayers-DblLine.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'LeHavreLayersDblLine';
        src: local('LeHavreLayersDblLine'), local('LeHavreLayersDblLine'),
        url(${LeHavreLayersDblLine}) format('woff'),
        url(${LeHavreLayersDblLine}) format('woff2');
        font-weight: 700;
        font-style: normal;
    }

`;
