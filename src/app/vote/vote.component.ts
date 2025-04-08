import { Component } from '@angular/core';
import { VoteBase } from '../models/voteBase.model';
import { SimpleVote } from '../models/simpleVote.model';
import { RankedVote } from '../models/rankedVote.model';
import { VoteOption } from '../models/voteOption.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-vote',
  imports: [CommonModule, FormsModule],
  templateUrl: './vote.component.html',
  styleUrl: './vote.component.scss'
})
export class VoteComponent 
{
  public vote: VoteBase;
  public selectedOption: VoteOption | null = null;

  constructor() {
    // Create vote and options in the component
    const option1 = new VoteOption('Option 1', 'Description of Option 1', 1);
    const option2 = new VoteOption('Option 2', 'Description of Option 2', 2);
    const option3 = new VoteOption('Option 3', 'Description of Option 3', 3);

    // Initialize Vote with options
    this.vote = new RankedVote('Choose your favorite option');
    this.vote.addOption(option1);
    this.vote.addOption(option2);
    this.vote.addOption(option3);
  }

  ngOnInit(): void {}

  // Method to handle option selection
  selectOption(option: VoteOption) {
    this.selectedOption = option;
  }

  onRankChange(option: VoteOption){
    if(option.OptionRank < option.oldOptionRank)
    {
      for (let i = option.OptionRank; i < option.oldOptionRank; i++)
      {
        let vo = this.vote.findOptionByRank(i);        
        if(vo != null)
          vo.OptionRank += 1;
      }
    }
    else if (option.OptionRank > option.oldOptionRank)
    {
      for (let i = option.OptionRank; i > option.oldOptionRank; i--)
      {
        let vo = this.vote.findOptionByRank(i);        
        if(vo != null)
          vo.OptionRank -= 1;
      }
    }
  }

  isRankedVote(){
    return this.vote.constructor.name == RankedVote.name;
  }
  
  isSimpleVote(){
    return this.vote.constructor.name == SimpleVote.name;
  }
}
