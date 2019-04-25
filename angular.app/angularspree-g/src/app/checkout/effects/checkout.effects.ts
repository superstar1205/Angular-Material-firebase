import { LineItem } from './../../core/models/line_item';
import { CheckoutService } from './../../core/services/checkout.service';
import { CheckoutActions } from './../actions/checkout.actions';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckoutEffects {

  constructor(private actions$: Actions,
  private checkoutService: CheckoutService,
  private actions: CheckoutActions) {}

  // tslint:disable-next-line:member-ordering
  @Effect()
    AddToCart$ = this.actions$
    .ofType(CheckoutActions.ADD_TO_CART)
    .switchMap((action: Action) => {
      return this.checkoutService.createNewLineItem(action.payload);
    })
    .map((lineItem: LineItem) => this.actions.addToCartSuccess(lineItem));
  }
  // @Effect()
    // FetchCurrentOrder$ = this.actions$
    // .ofType(CartActions.FETCH_CURRENT_ORDER)
    // .switchMap((action: Action) => {
    //   return this.cartService.fetchCurrentOrder();
    // })
    // .map((order: Order) => {
    //   return this.cartActions.fetchCurrentOrderSuccess(order);
    // });



  // Use this effect once angular releases RC4

  // @Effect()
  //   RemoveLineItem$ = this.actions$
  //   .ofType(CartActions.REMOVE_LINE_ITEM)
  //   .switchMap((action: Action) => {
  //     return this.cartService.deleteLineItem(action.payload);
  //   })
  //   .map(() => this.cartActions.removeLineItemSuccess());

