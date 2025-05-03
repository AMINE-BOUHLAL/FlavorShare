import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../Models/recipe.model';
import {CommonModule, NgForOf} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class DetailsComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getbyid(id).subscribe(rec=>{this.recipe=rec});
  }
}

