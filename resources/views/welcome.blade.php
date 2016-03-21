<!DOCTYPE html>
<html>
    <head>
    <meta id="_token" value="{{ csrf_token() }}" />
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
        <form class="form-group" novalidate @submit="onSubmitForm">
            <div class="form-group">
                <label>
                    ชื่อ
                    <span v-if="! newMessage.name">*</span>    
                </label>
                <input id="name" class="form-control" 
                v-model="newMessage.name"
                />
            </div>
            <div class="form-group">
                <label>
                    ข้อความ
                    <span v-if="! newMessage.message">*</span> 
                </label>
                <textarea class="form-control" cols="20" rows="5"  v-model="newMessage.message"></textarea>
            </div>
            <button class="btn btn-default btn-md" :disabled="errors" >ส่ง</button>
        </form>

        <div v-if="submitted" id="alert" class="alert alert-success">Thanks</div>
      </div> 

    <div class="panel-body">
        <article v-for="message in messages">
            <h4>@{{ message.name }}</h4>
            <div class="body">
                @{{ message.message }}
            </div>
        </article>
        <pre>@{{ $data | json }}</pre>
    </div>   
</div>

</div><!-- /#app -->   
</div><!-- /.container -->
    {!! Html::script('js/jquery.js') !!}
    {!! Html::script('js/vue.js') !!}
    {!! Html::script('js/vue-resource.min.js') !!}
    {!! Html::script('js/bundle.js') !!}
</body>
</html>
