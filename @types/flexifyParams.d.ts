type ReturnValue<PARAM extends object> = {
    [KEY in keyof PARAM]: PARAM[KEY] extends (...x: any) => infer RETURN_VAL ? RETURN_VAL : PARAM[KEY];
};
export default function flexifyParams<PARAM extends object>(param: PARAM, args?: any[]): ReturnValue<PARAM>;
export {};
//# sourceMappingURL=flexifyParams.d.ts.map