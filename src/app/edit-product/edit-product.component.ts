import { ProductService } from './../adminServices/product.service';
import { Product } from './../product/Product';
import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  imageSrc;
  product:Product= new Product(null,"",null,0,"","");
  productOut:Product= new Product(null,"",null,0,"","");
  @ViewChild('warningDiv', {static: true}) warningDiv :ElementRef;

  constructor(private productService:ProductService) {

   }

  ngOnInit(): void {
    this.product =this.productService.passedProduct;
    this.imageSrc =this.product.image;
  }


  OnUpdateProduct(title,price,sizes,details){
    if(title!=""&&price!=0&&sizes!=""&&details!=""&&this.imageSrc!=""){
      const formData = new FormData();
      const id = this.product._id;
      this.productOut = new Product(this.product._id,title,this.imageSrc,price,details,sizes);
      formData.append("title",title);
      formData.append("productImage",this.imageSrc);
      formData.append("price",price);
      formData.append("details",details);
      formData.append("size",sizes);
      this.productService.editProduct(id,formData).subscribe((response)=>{
        if(response){
          console.log(response);
          this.OnDiscard();
        }
      },
      (err)=>{
        console.log(err);
      });

    }
    else{
      this.warningDiv.nativeElement.style.display='block';
    }
  }

  OnDiscard(){
    this.ngOnInit();
  }

  imagePreview;
  OnUpload(event){
    if (event.target.files && event.target.files[0]) {
      this.imageSrc =event.target.files[0];
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = () => this.imagePreview = reader.result;
      this.productOut.image = this.imageSrc;
      reader.readAsDataURL(file);
    }
  }

}
