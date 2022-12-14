import React from "react";
import ModalBgItem from "./ModalBgItem";
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';
import Select from '@mui/joy/Select';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="profile">
                    <img src="/images/Frame 11.png" alt="" />
                    <span>Daler</span>
                    <img src="/images/Frame 12.png" alt="" />
                </div>
            </div>
            <ModalBgItem/>
        </>
    )
}
// const theme = extendTheme({
//     components: {
//       JoySelect: {
//         defaultProps: {
//           indicator: '↕',
//         },
//       },
//     },
//   });
  
//   const App = () => (
//     <CssVarsProvider theme={theme}>
//       <Select>...options</Select>
//     </CssVarsProvider>
//   );


export default Header;
