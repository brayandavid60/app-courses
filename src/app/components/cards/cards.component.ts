import { Component, Input, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items: any[] = [];

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      $(".moreBox").slice(0, 3).show();
      if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
      }
      $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 6).slideDown();
        if ($(".moreBox:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
        }
      });
    });
  }

}
