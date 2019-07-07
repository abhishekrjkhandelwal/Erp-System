import { Injectable } from '@angular/core';
import { Imomodel } from './imomodel.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  
@Injectable({
  providedIn: 'root'
})
export class ImoService {

  imosRef: AngularFireList<any>;    
  imoRef: AngularFireObject<any>;

   constructor(private db: AngularFireDatabase) { }
   formData:  Imomodel;
}
