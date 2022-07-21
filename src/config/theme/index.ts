import {Palette, PaletteOptions, ThemeOptions} from "@mui/material";

const componentsOverides = {
    components:{
        MuiDivider:{
            styleOverrides:{
                vertical:{
                    borderColor:'white'
                }
            }
        }
    },
    palette: {
        orange:{
            main:'#fa663e'
        },
        white:{
            main:'#fff'
        },
        lightBlue:{
            main:'#1c428b'
        }
    } as Palette,
}


export const ltrTheme:ThemeOptions = {
    ...componentsOverides,
    direction:'ltr',

}

export const rtlTheme:ThemeOptions = {
    ...componentsOverides,
    direction:'rtl'
}

