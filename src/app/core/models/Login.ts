export class Login {
    constructor(
        public emailOrPhone: string = "",
        public password: string = "",
        public rememberMe: boolean
    ) { }
}