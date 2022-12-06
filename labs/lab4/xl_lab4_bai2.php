<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<table border="0" width="500">
            <tr>
            <td colspan="2" align="center"><b>THÔNG TIN SẢN PHẦM VỪA THÊM LÀ:</b></td></tr>
            
            
            
            <tr><td width="150">Mã sản phẩm</td>
           	<td><?php echo $_POST['nmProID']; ?></td>
            </tr>
            <tr><td>Tên sản phẩm</td>
           	<td><?php echo $_POST['nmProName']; ?></td>
            </tr>
            <tr><td>Hình ảnh</td>
           	<td><?php echo $_FILES['nmProImg']['name']; ?></td>
            </tr>
            
            <tr><td>Loại sản phẩm</td>
           	<td><?php echo $_POST['nmCat']; ?></td></tr>
            <tr><td>Hãng sản xuất</td>
           	<td><?php echo $_POST['nmMan']; ?></td></tr>
            <tr><td>Kích thước</td>
           	<td><?php echo $_POST['nmWidth']." x ".$_POST['nmHeight']." x ". $_POST['nmDepth']." mm" ; ?></td>
            </tr>
            <tr><td>Trọng lượng</td>
           	<td> <?php echo $_POST['nmWeight']; ?>g</td>
            </tr>
            <tr><td>Giá</td>
           	<td>
            <table width="100%" cellpadding="0" cellspacing="0">
            	<tr>
                	<td width="170"><?php echo $_POST['nmPrice']; ?></td>
                    <td>Màu: <?php echo $_POST['nmColor']; ?></td>
                </tr>
            </table>
            
            </td>
            </tr>
            <tr>
            	<td>Hệ điều hành</td>
                <td> <?php echo $_POST['nmOS']; ?>
              </td>
            </tr>
            <tr><td>Chức năng</td>
           	<td><?php
            foreach($_POST['nmFunctions'] as $v)
				echo $v. "; "
			?></td>
            </tr> 
            <tr>
            <tr><td>Mô tả chi tiết</td>
           	<td><?php echo $_POST['nmProDet']; ?></td>
            </tr> 
            
            
            </table>
</body>
</html>