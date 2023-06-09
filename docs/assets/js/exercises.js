export const exercises = [
    {
        id: "div-major-7-circle",
        name: "Rootless Major 7th",
        abc: [
            '"Cmaj7"[EGBd]', '"Fmaj7"[A,CEG]',
            '"Bbmaj7"[DFAc]', '"Ebmaj7"[G_Bdf]',
            '"Abmaj7"[C_EG_B]', '"Dbmaj7"[F_Ac_e]',
            '"F#maj7"[^A^c^e^g]', '"Bmaj7"[^D^F^A^c]',
            '"Emaj7"[^GB^d^f]', '"Amaj7"[^CE^GB]',
            '"Dmaj7"[^FA^ce]', '"Gmaj7"[B,D^FA]',
            '"Cmaj7"[EGBd]'
        ]
    },
    {
        id: "div-minor-7-circle",
        name: "Rootless Minor 7th",
        abc: [
            '"Cmin7"[_EG_Bd]', '"Fmin7"[_A,C_EG]',
            '"Bbmin7"[_DF_Ac]', '"Ebmin7"[_G_B_df]',
            '"Abmin7"[_C_E_G_B]', '"Dbmin7"[_F_A_c_e]',
            '"F#min7"[A^ce^g]', '"Bmin7"[D^FA^c]',
            '"Emin7"[GBd^f]', '"Amin7"[CEGB]',
            '"Dmin7"[FAce]', '"Gmin7"[_B,DFA]',
            '"Cmin7"[_EG_Bd]'
        ]
    },
    {
        id: "div-minor-major-7-circle",
        name: "Rootless Minor Major 7th",
        abc: [
            '"Cmin7"[_EGBd]', '"Fmin7"[_A,CEG]',
            '"Bbmin7"[_DFAc]', '"Ebmin7"[_G_Bdf]',
            '"Abmin7"[_C_EG_B]', '"Dbmin7"[_F_Ac_e]',
            '"F#min7"[A^c^e^g]', '"Bmin7"[D^F^A^c]',
            '"Emin7"[GB^d^f]', '"Amin7"[CE^GB]',
            '"Dmin7"[FA^ce]', '"Gmin7"[_B,D^FA]',
            '"Cmin7"[_EGBd]'
        ]
    },
    {
        id: "div-dom-7-circle",
        name: "Rootless Dominant 7th",
        abc: [
            '"C7"[EG_Bd]', '"F7"[A,C_EG]',
            '"Bb7"[DF_Ac]', '"Eb7"[G_B_df]',
            '"Ab7"[C_E_G_B]', '"Db7"[F_A_c_e]',
            '"F#7"[^A^ce^g]', '"B7"[^D^FA^c]',
            '"E7"[^GBd^f]', '"A7"[^CEGB]',
            '"D7"[^FAce]', '"G7"[B,DFA]',
            '"C7"[EG_Bd]'
        ]
    },
    {
        id: "div-dim-7-circle",
        name: "Rootless Diminished",
        abc: [ '"Cdim"[_E_GBd]', '"Fdim"[_A,_CEG]',
            '"Bbdim"[_D_FAc]', '"Ebdim"[_G__Bdf]',
            '"Abdim"[_C__EG_B]', '"Dbdim"[_F__Ac_e]',
            '"F#dim"[Ac^e^g]', '"Bdim"[DF^A^c]',
            '"Edim"[G_B^d^f]', '"Adim"[C_E^GB]',
            '"Ddim"[F_A^ce]', '"Gdim"[_B,_D^FA]',
            '"Cdim"[_E_GBd]'
        ]
    },
    //TODO: Add enharmonic version.
    {
        id: "div-half-dim-7-circle",
        name: "Rootless Half Diminished",
        abc: [
            // b5 b7 9 11
            '"Cm7b5"[_G_Bdf]', '"Fm7b5"[_C_EG_B]',
            '"Bbm7b5"[_F_Ac_e]', '"Ebm7b5"[__B_df_a]',
            '"Abm7b5"[__E_G_B_d]', '"Dbm7b5"[__A_c_e_g]',
            '"F#m7b5"[ce^gb]', '"Bm7b5"[FA^ce]',
            '"Em7b5"[_Bd^fa]', '"Am7b5"[_EGBd]',
            '"Dm7b5"[_Aceg]', '"Gm7b5"[_DFAc]',
            '"Cm7b5"[_G_Bdf]'
        ]
    },
    //TODO: Add enharmonic version.
    {
        id: "div-altered-circle",
        name: "Rootless Altered",
        abc: [
            '"C7alt"[E^G_B^d]', '"F7alt"[A,^C_E^G]',
            '"Bb7alt"[D^F_A^c]', '"Eb7alt"[GB_d^f]',
            '"Ab7alt"[CE_GB]', '"Db7alt"[FA_ce]',
            '"F#7alt"[^A^^ce^^g]', '"B7alt"[^D^^FA^^c]',
            '"E7alt"[^G^Bd^^f]', '"A7alt"[^C^EG^B]',
            '"D7alt"[^F^Ac^e]', '"G7alt"[B,^DF^A]',
            '"C7alt"[E^G_B^d]'
        ]
    }
]
