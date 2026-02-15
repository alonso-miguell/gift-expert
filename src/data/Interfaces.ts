export interface GifElement {
    id: string;
    title: string;
    url: string;
    width: number;
    height: number;
}

export type GifHookProps = {
    handleOnSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    inputValue: string;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};