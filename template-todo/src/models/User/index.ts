abstract class User {
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public displayName: string    
    ) {}
}

class LocalUser implements User {
    constructor(
        public id: string,
        public username: string,
        public email: string,
        public displayName: string,
    ) {}
}

class RegisteredUser implements User {
    constructor(
        public id: string,
        public username: string,
        public password: string,
        public email: string,
        public displayName: string,
    ) {}
}