<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List</title>
</head>
<body>
    <ul>
        <li class="list-horizontal_line">Item 1</li>
        <li class="list-horizontal_line">Item 2</li>
    </ul>

    <br><br><br>
    <div class="custom-line">Section Title o\ Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores veritatis ab a inventore suscipit error doloribus quae ut cupiditate perferendis, vitae, id enim repudiandae similique dolore doloremque, mollitia excepturi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem adipisci veniam sequi, reprehenderit nostrum autem enim corporis, eos recusandae rem cupiditate! Hic fugiat cupiditate distinctio, corporis quibusdam excepturi soluta maiores.</div>

    <div class="list-horizontal_line">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda minus quasi unde temporibus est, deleniti perferendis adipisci possimus laudantium consequuntur aliquid natus a itaque cupiditate dignissimos esse cum repellendus doloremque?</div>


    <ul>
  <li class="list-vertical_line">
    This is some text<br>spanning multiple lines.
  </li>
</ul>

<div class="list-vertical_line">This works anywhere — footer, card, etc.</div>
<br><br><br>
<div class="footer-divider"></div>
<!-- <script src="Components/createVerticalLineStyles.js"></script> -->

<script src="Components\createLineStyles.js"></script>
<!-- JavaScript -->
<script>
  createHorizontalLineStyles({
    selector: '.custom-line',
    width: '30px',
    background: 'blue',
    top: '55%',
    height: '2px'
  });
</script>

<script>
  createVerticalLineStyles({
    selector: '.footer-divider',
    width: '1px',
    height: '50px',
    background: '#999',
    dashed: true,
    gap: '15px',
    margin: '5px'
  });
</script>

</body>
</html>