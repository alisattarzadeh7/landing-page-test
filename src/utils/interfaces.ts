declare module '@mui/material/styles' {

    interface Palette {
        orange: Palette['primary'];
        white: Palette['primary'];
    }
    interface PaletteOptions {
        orange: PaletteOptions['primary'];
        white: PaletteOptions['primary'];
    }

}


export interface apiOptions{
    showSuccess?:string,
    showErrors?:boolean,
    returnData?:boolean
}


export interface apiBasicParam{
    url:string,
    params?:any
}
