
type User1Type = { name: string, id: number };

type User2Type = { name: string, roll: number };


const func8 = (user: User1Type) => {
    console.log(`name is ${user.name} and id is ${user.id}`);
    
}