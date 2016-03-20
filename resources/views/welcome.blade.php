<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Chutipong Roobklom Tutorial Laravel and Vue.js</title>

    {!! Html::style('css/bundle.css') !!}
</head>    
<body>
<div class="container">
<div id="app">

<div id="panel" class="panel panel-default">
    <div class="panel-heading">
        <h3>ผู้เยี่ยมชม</h3>
        <form class="form-group">
            <div class="form-group">
                <label>ชื่อ</label>
                <input class="form-control"></input>
            </div>
            <div class="form-group">
                <label>ข้อความ</label>
                <input class="form-control"></input>
            </div>
            <button class="btn btn-default btn-md">ส่ง</button>
        </form>
    </div> 

    <div class="panel-body">
        <article v-for="message in messages">
            <h4>@{{ message.name }}</h4>
            <div class="body">
                @{{ message.body }}
            </div>
        </article>
        <pre>@{{ $data | json }}</pre>
    </div>   
</div>

</div><!-- /#app -->    
</div><!-- /.container -->
    {!! Html::script('js/jquery.js') !!}
    {!! Html::script('js/bundle.js') !!}
</body>
</html>
