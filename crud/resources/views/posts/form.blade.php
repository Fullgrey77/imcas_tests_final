<div class="row">
  <div class="col-xs-12">
    <div class="form-group">
      <strong>Nom : </strong>
      {!! Form::text('name', null, ['placeholder'=>'Veuillez rentrer le nom du produit.','class'=>'form-control']) !!}
    </div>
  </div>
  <div class="col-xs-12">
    <div class="form-group">
      <strong>Type : </strong>
      {!! Form::text('type', null, ['placeholder'=>'Veuillez rentrer le type du produit.','class'=>'form-control']) !!}
    </div>
  </div>
  <div class="col-xs-12">
    <div class="form-group">
      <strong>Prix : </strong>
      {!! Form::number('price', null, ['placeholder'=>'Veuillez rentrer le prix du produit.','class'=>'form-control']) !!}
    </div>
  </div>
  <div class="col-xs-12">
    <div class="form-group">
      <strong>Code Barre : </strong>
      {!! Form::text('barcode', null, ['placeholder'=>'Veuillez rentrer le code barre du produit.','class'=>'form-control']) !!}
    </div>
  </div>
  <div class="col-xs-12">
    <a class="btn btn-s btn-success" href="{{ route('posts.index') }}">Retour</a>
    <button type="submit" class="btn btn-s btn-primary" name="button">Valider</button>
  </div>
</div>