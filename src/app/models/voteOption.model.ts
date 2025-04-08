export class VoteOption
{
    public OptionTitle: string;
    public OptionDescription: string;
    public OptionRank: number;
    public oldOptionRank: number;

    constructor(_title: string, _description: string, _rank: number = -1)
    {
        this.OptionTitle = _title;
        this.OptionDescription = _description;
        this.OptionRank = _rank;
        this.oldOptionRank = _rank;
    }
}