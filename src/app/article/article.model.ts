export class Article {
    constructor(private title: string, private link: string, private votes: number = 0){
    }

    getVotes(): number {
        return this.votes;
    }

    voteUp(){
        this.votes++;
    }

    voteDown(){
        this.votes--;
    }

    domain(): string {
        try{
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}