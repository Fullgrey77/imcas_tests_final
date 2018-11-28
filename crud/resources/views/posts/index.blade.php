@extends('posts.master')

@section('content')
  <div class="row">
    <div class="col-lg-12">
      <h3>CRUD Exercise Alexandre MISAIPHON</h3>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="pull-right">
        <a class="btn btn-xs btn-success" href="{{ route('posts.create') }}">Ajout Nouveau Produit</a>
      </div>
    </div>
  </div>
  @if ($message = session('success'))
    <div class="alert alert-success">
      <p>{{ $message }}</p>
    </div>
  @endif

  <table class="table table-bordered">
    <tr>
      <th>ID</th>
      <th>Nom</th>
      <th>Type</th>
      <th>Prix</th>
      <th>Barcode</th>
      <th width="300px">Actions</th>
    </tr>

    @foreach ($posts as $post)
      <tr>
        <td>{{ $post->id }}</td>
        <td>{{ $post->name }}</td>
        <td>{{ $post->type }}</td>
        <td>{{ $post->price }}</td>
        <td>{{ $post->barcode }}</td>
        <td>
          <a class="btn btn-xs btn-primary" href="{{ route('posts.edit', $post->id) }}">Modifier</a>

          {!! Form::open(['method' => 'DELETE', 'route'=>['posts.destroy', $post->id], 'style'=> 'display:inline']) !!}
          {!! Form::submit('Supprimer',['class'=> 'btn btn-xs btn-danger']) !!}
          {!! Form::close() !!}
        </td>
      </tr>
    @endforeach
  </table>
  {!! $posts->links() !!}
@endsection