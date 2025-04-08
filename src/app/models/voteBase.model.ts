import { VoteOption } from "./voteOption.model";

export class VoteBase
{
    public Title: string;
    public Options: VoteOption[];

    constructor(_title: string, _options: VoteOption[] = [])
    {
        this.Title = _title;
        this.Options = _options; 
    }

    public addOption(option: VoteOption) 
    {
        this.Options.push(option);
    }

    public findOptionByRank(rank: number)
    {
        return this.Options.find(option => option.OptionRank === rank);
    }
}