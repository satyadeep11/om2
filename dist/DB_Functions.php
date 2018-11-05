<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
class DB_Functions {
 
    private $conn;
 
    // constructor
    function __construct() {
        require_once 'DB_Connect.php';
        // connecting to database
        $db = new Db_Connect();
        $this->conn = $db->connect();
    }
 
    // destructor
    function __destruct() {
         
    }

	
	/*
	Mailer Function
	*/
public function Mailer($arrTo, $arrCC, $subject, $header, $body) {

	   $server        = 'https://' . $_SERVER['SERVER_NAME'];
	   $imgSrcPrefix  = $server . '/img/';
		//<img src="' . $imgSrcPrefix . 'brand-logo.png" height="34" width="34" style="min-height:auto;line-height:100%;outline:none;text-decoration:none;display:block;margin: 0 10px;float:left;" />
	   $mailBody = '
		  <html>
			 <head></head>
			 <body>
						' . $body . '
						<hr style="border:none;height:1px;color:#aaaaaa;background-color:#aaaaaa;margin-top:25px;" />
						<p style="font-size:11px;color:#aaaaaa;margin:5px 0;padding:0;"><em>This automated message was sent from deep.idworks.com on ' . date('m/d/Y \a\t g:i:s a') . '</em></p>

			 </body>
			 </html>';

	   require_once('PHPMailer/SMTP.php');
	   require_once 'PHPMailer/PHPMailer.php';
	   require_once 'PHPMailer/Exception.php';

	   $mail = new PHPMailer(); 
	   $mail->IsSMTP();
	   $mail->IsHTML(true);
	   $mail->Host     = 'deep.idworks.com';
	   $mail->SMTPAuth = false;
	   $mail->FromName = 'Quick Select';
	   $mail->From     = 'sales@idworks.com';
	   $mail->Sender   = 'sales@idworks.com';
	   $mail->AddReplyTo('sales@idworks.com', 'Quick Select');
	   $mail->Subject  = $subject;
	   $mail->Body     = $mailBody;
	   $mail->ClearAllRecipients();

	   if(is_array($arrTo)){
		foreach($arrTo as $address=>$name){
			$mail->AddAddress($address, $name);
		}unset($address,$name);
	   }
	   if(is_array($arrCC)){
		foreach($arrCC as $address=>$name){
			$mail->AddCC($address, $name);
		}unset($address,$name);
	   }
		//echo("SENT!");
	   //$mail->AddBcc('ryan@idworks.com', 'Ryan Born');
	   
	   return $mail->Send();
	   
	}
	/*
	Mailer Function
	*/
	
	/**
     * Get single product color details
     */
    public function getSingleOrder($selection_id,$status) {	

			$cartproducts=array();	
			$stmt = $this->conn->prepare("
			
SELECT  `qs_prod_id` as ProductID, `qs_prod_attr2` as Attr2, `qs_prod_color` as A2_Label, `qs_prod_price` as Price,`qs_prod_name` as ProductName,`qs_prod_image` as ImageFile,
(select GROUP_CONCAT(`qs_prod_color` SEPARATOR ',') from `quickselect_product` where `qs_prod_id`= ProductID and `qs_selection_id`= P.`qs_selection_id` ) as ColorsList
FROM `quickselect_product` P 
INNER JOIN `quickselect_selection` S ON S.`qs_selection_id`= P.`qs_selection_id`
WHERE P.`qs_selection_id`=? and `qs_prod_status`=1 and S.`qs_approved_status`=? GROUP BY ProductID;
			
			
			");
			$stmt->bind_param("ii", $selection_id,$status);
			if ($stmt->execute()) {
				$result=$stmt->get_result();
					while($row = $result->fetch_assoc()) {
						$cartproducts[] = $row;
					}            
			} else {
				return NULL;
			}
			$cart['cartproducts']=$cartproducts;
			$cart['selection_id']=$selection_id;			

        $stmt->close();
		
		if ($result) {
			return $cart;
        } else {
            return false;
        }
    }
	
	
	
    
	/**
     * Get single product color details
     */
    public function getCart($uuid) {
		$a=0;
		$cart=array();
		$selection_id='';
		$cartproducts=array();
		$stmt = $this->conn->prepare(
            "SELECT `qs_selection_id` FROM `quickselect_selection` WHERE `qs_cust_id`=? and `qs_selection_status`=0 order by `qs_selection_id` desc " );			
		$stmt->bind_param("s",$uuid);
		$stmt->execute();
		$result=$stmt->get_result();
		if ($result->num_rows!=0) 
		{
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
			
			$selection_id=$user[0]['qs_selection_id'];
			$stmt = $this->conn->prepare("
			SELECT  `qs_prod_id` as ProductID, `qs_prod_attr2` as Attr2, `qs_prod_color` as A2_Label, `qs_prod_price` as Price,`qs_prod_name` as ProductName,`qs_prod_image` as ImageFile FROM `quickselect_product` WHERE `qs_selection_id`=? and  `qs_prod_status`=0
			");
			$stmt->bind_param("i", $selection_id);
			if ($stmt->execute()) {
				$result=$stmt->get_result();
					while($row = $result->fetch_assoc()) {
						$cartproducts[] = $row;
					}            
			} else {
				return NULL;
			}
			$cart['cartproducts']=$cartproducts;
			$cart['selection_id']=$selection_id;			
	
        } else {
			//no user add to cart found
			$stmt = $this->conn->prepare(
            "INSERT INTO `quickselect_selection`( `qs_selection_status`, `qs_site_id`, `qs_cust_id`, `qs_approved_by_id`) VALUES (?,?,?,?)");					
			$stmt->bind_param("ssss",$a,$a,$uuid,$a);
			$result = $stmt->execute();  
			$selection_id = $stmt->insert_id; 
			
			$cart['cartproducts']=$cartproducts;
			$cart['selection_id']=$selection_id;			
        }

        $stmt->close();
		
		if ($result) {
			return $cart;
        } else {
            return false;
        }
    }
	
	
		
	/**
     * Get single product color details
     */
    public function insertProduct($productid,$colorcodes,$colors,$selectionid,$price,$name,$image,$status) {
		
			//code to insert product and colors in qs_product
			// $name = $mysqli->real_escape_string($name);
			$name  = mysqli_real_escape_string($this->conn, $name);
			if(is_array($colors)){
				$i=0;
				$DataArr = array();
					foreach ($colors as $color) {
						$DataArr[] = "('$productid','$colorcodes[$i]', '$color', '$selectionid','$status','$price','$name','$image[$i]')";
						$i++;						
						
					error_log( print_r( $DataArr, true ) );
					}
					$sql = "INSERT IGNORE INTO `quickselect_product` (`qs_prod_id`, `qs_prod_attr2`, `qs_prod_color`, `qs_selection_id`,`qs_prod_status`,`qs_prod_price`,`qs_prod_name`, `qs_prod_image`) VALUES ";
					$sql.= implode(',', $DataArr);
					$stmt = $this->conn->prepare($sql);
					$result = $stmt->execute();
				}

        $stmt->close();
		
		if ($result) {
            return true;
        } else {
            return false;
        }
    }
	
		/**
     * Get single product color details
     */
    public function insertCategory($selectionid,$catid) {
		$catid='"'.$catid.'"';
		
					$sql = "
								UPDATE `quickselect_selection` SET `qs_cat_list`=".$catid." WHERE `qs_selection_id`=".$selectionid."
							";
					$stmt = $this->conn->prepare($sql);
					$result = $stmt->execute();			
        $stmt->close();		
		if ($result) {
            return true;
        } else {
            return false;
        }
    }
	
	/**
     * Confirm an Order
     */
    public function orderConfirm($selectionid,$uuid,$siteid) {
		
					$stmt = $this->conn->prepare("UPDATE `quickselect_selection` SET `qs_site_id`=?,`qs_approved_by_id`=?,`qs_approved_status`=1,`qs_approved_ts`=now() WHERE `qs_selection_id`=?");
					$stmt->bind_param("isi",$siteid,$uuid,$selectionid);					
					$result = $stmt->execute();
					$result=$stmt->affected_rows;
			error_log( print_r( $result , true ) );	

        $stmt->close();
		
		if ($result) {
            return $result;
        } else {
            return false;
        }
    }
	
	public function deleteProduct($productid,$colorcodes,$selectionid,$status) {
		
			//code to delete single product and single colors in qs_product
			
			$stmt = $this->conn->prepare( "DELETE FROM `quickselect_product` WHERE `qs_prod_id`= ? and `qs_prod_attr2`=? and `qs_selection_id`=? and `qs_prod_status`=?");					
					$stmt->bind_param("dsdd",$productid,$colorcodes[0],$selectionid,$status);
					$result = $stmt->execute();
        $stmt->close();
		
		if ($result) {
            return true;
        } else {
            return false;
        }
    }
	
	public function deleteProductTotal($productid,$selectionid,$status) {
		
			//code to delete single product and total colors in qs_product
			
			$stmt = $this->conn->prepare( "DELETE FROM `quickselect_product` WHERE `qs_prod_id`= ? and `qs_selection_id`=? and `qs_prod_status`=?");					
					$stmt->bind_param("ddd",$productid,$selectionid,$status);
					$result = $stmt->execute();
        $stmt->close();
		
		if ($result) {
            return true;
        } else {
            return false;
        }
    }
	
	public function submitProduct($uuid,$selectionid,$email,$fname,$lname,$userquery) {
		
			//code to insert product and colors in qs_product
			
			$stmt = $this->conn->prepare( "UPDATE `quickselect_selection` SET `qs_selection_status`=1,qs_user_query=? WHERE `qs_selection_id`= ?");					
					$stmt->bind_param("sd",$userquery,$selectionid);
					$result = $stmt->execute();
			$stmt = $this->conn->prepare( "UPDATE `quickselect_product` SET `qs_prod_status`=1 WHERE `qs_selection_id`=?");					
					$stmt->bind_param("d",$selectionid);
					$result = $stmt->execute();
        $stmt->close();

		if ($result) {
			//send email
					$link ="https://deep.idworks.com/signup?email=".$email."&uuid=".$uuid;
					$message = file_get_contents(realpath(dirname(__FILE__)).'/mailer_user_selection.html');
					$message=str_replace("UserName",$fname.' '.$lname, $message);
					$products=$this->getSingleOrder($selectionid,0);
					
					//load products in table
					$producttable="<table>";
					foreach($products['cartproducts'] as &$value){
						$producttable.="<tr><td><img src='https://www.afhsgear.com/sites/998/products/998_".$value['ProductID']."_".$value['ImageFile']."' style='width:50px;height:50px;' ></td><td>  ".$value['ProductName']."</td><td>Colors: ".$value['ColorsList']." </td></tr>";
					}
					$producttable.="</table>";					
					//
					$message=str_replace("InsertProductsHere",$producttable, $message);
					$message=str_replace("userquery",$userquery, $message);
						
					 $arrTo=array($email=>$fname.' '.$lname);
					 $arrCC=array('deep@idworks.com'=>'Deep Singh');
					 $subject='Confirmed Selection '.$selectionid.' at Quick Select ';
					 $header='Quick Select Registration';
					 $body=$message;		 
			
					 $retval=$this->Mailer($arrTo, $arrCC, $subject, $header, $body);
			//send email
			 if($retval)
				return true;
			 else 
				 return false;
        } else {
            return false;
        }
    }
	
	
	
    

    /**
     * Get single product
     */
    public function getSingleProduct($pricingid) {
	 
        $stmt = $this->conn->prepare(
            "SELECT P.ProductID,SiteID,ProductName,ProductBaseSKU,ProductDesc1,PricingID,SKU,PP.Attr1,PP.Attr2,PP.QtyMin,PP.QtyMax,I.ImageID,I.ImageFile,Available,Price,DefaultPrice,
            O1.OptionLabel as A1_Label,O1.OptionShortLabel as A1_Short,
            O2.OptionLabel as A2_Label,O2.OptionShortLabel as A2_Short
            FROM products P
            INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
            LEFT OUTER JOIN product_images I ON I.ImageID=PP.ImageID
            LEFT OUTER JOIN product_attr_options O1 ON O1.OptionID=Attr1
            LEFT OUTER JOIN product_attr_options O2 ON O2.OptionID=Attr2
            WHERE P.SiteID=998 AND P.StatusID=1 and PricingID=?
            ORDER BY ProductName, A1_Label,A2_Label");
		$stmt->bind_param("i", $pricingid);
		if ($stmt->execute()) {
			$result=$stmt->get_result();
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
            $stmt->close();
			return $user;
        } else {
            return NULL;
        }
    }
	
	/**
     * delete selected user
     */
    public function deleteSingleUser($customerid) {
		 
        $stmt = $this->conn->prepare("UPDATE quickselect_customer SET _delete=1 WHERE admin=0 and unique_id=? ");
		$stmt->bind_param("s", $customerid);
		$result = $stmt->execute();
        $stmt->close();
        if ($result) {
             return true;
        } else {
            return NULL;
        }
    }
	
	/**
     * update selected user
     */
	public function updateSingleUser($customerid,$fname,$lname,$company,$phone,$security_group){
		 
        $stmt = $this->conn->prepare("UPDATE quickselect_customer SET `fname`=?,`lname`=?,`company`=?,`phone`=?,`security_group`=? WHERE admin=0 and unique_id=? ");
		$stmt->bind_param("ssssss", $fname,$lname,$company,$phone,$security_group,$customerid);
		$result = $stmt->execute();
        $stmt->close();
        if ($result) {
             return true;
        } else {
            return NULL;
        }
    }
	
	/**
     * Get user List
     */
    public function getSingleUser($email) {
	 
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`,security_group, `_delete` FROM quickselect_customer WHERE admin=0 and email = ? and _delete=0");
		$stmt->bind_param("s", $email);
		if ($stmt->execute()) {
			$result=$stmt->get_result();
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
            $stmt->close();
			return $user;
        } else {
            return NULL;
        }
    }
	
	/**
     * Get user List
     */
    public function getUserList() {
		
 
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`,security_group, `_delete` FROM quickselect_customer where admin=0 and _delete=0");
 
        if ($stmt->execute()) {
			$result=$stmt->get_result();
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
            $stmt->close();
			return $user;
        } else {
            return NULL;
        }
    }
	
	
	/**
     * Get orders List
     */
    public function getOrdersList() {		
 
        $stmt = $this->conn->prepare("
		
		SELECT S.`qs_selection_id` as Id,CONCAT(C.fname, ' ', C.lname) as Name ,C.company as Company, C.email as Email, S.`qs_approved_by_id`,S.`qs_approved_status`, S.`qs_select_app_ts` as Date		
		FROM `quickselect_selection` S 
		INNER JOIN `quickselect_customer` C ON C.unique_id=S.`qs_cust_id`		
		WHERE S.`qs_selection_status`=1 and EXISTS(select * from `quickselect_product` where S.`qs_selection_id`=`qs_selection_id` ) and S.`qs_approved_status`=0
		group by S.`qs_selection_id`
		
		");
 
        if ($stmt->execute()) {
			$result=$stmt->get_result();
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
            $stmt->close();
			return $user;
        } else {
            return NULL;
        }
    }
	
	/**
     * Get orders List
     */
    public function getOrdersListFull() {		
 
        $stmt = $this->conn->prepare("
		
		SELECT S.`qs_selection_id` as Id,CONCAT(C.fname, ' ', C.lname) as Name ,C.company as Company, C.email as Email,(select concat(fname,' ',lname) from quickselect_customer where unique_id=S.`qs_approved_by_id`) as Approved_by_name, S.`qs_approved_by_id`,S.`qs_approved_status`, S.`qs_approved_ts` as Date		
		FROM `quickselect_selection` S 
		INNER JOIN `quickselect_customer` C ON C.unique_id=S.`qs_cust_id`		
		WHERE S.`qs_selection_status`=1 and EXISTS(select * from `quickselect_product` where S.`qs_selection_id`=`qs_selection_id` ) and S.`qs_approved_status`=1
		group by S.`qs_selection_id`
		
		");
 
        if ($stmt->execute()) {
			$result=$stmt->get_result();
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
            $stmt->close();
			return $user;
        } else {
            return NULL;
        }
    }
	
	/**
     * Get orders List
     */
    public function getCustomerOrdersListFull($uuid) {		
 
        $stmt = $this->conn->prepare("
		
		SELECT S.`qs_selection_id` as selectionid, S.`qs_approved_status`, S.`qs_select_app_ts` as Date,(
		SELECT COUNT(distinct qs_prod_id ) 
		FROM `quickselect_product`
		WHERE qs_selection_id=S.`qs_selection_id`)	as Count	
		FROM `quickselect_selection` S 				
		WHERE S.`qs_selection_status`=1 and EXISTS(select * from `quickselect_product` where S.`qs_selection_id`=`qs_selection_id` ) and S.`qs_selection_status`=1 and qs_cust_id='".$uuid."'
		group by S.`qs_selection_id`		
		
		");
 
        if ($stmt->execute()) {
			$result=$stmt->get_result();
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
            $stmt->close();
			return $user;
        } else {
            return NULL;
        }
    }

	/**
     * Get invite accetpted user List
     */
    public function getAcceptedList() {
		
 
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`,security_group, `_delete` FROM quickselect_customer where admin=0 and updated_at is not null and _delete=0");
 
        if ($stmt->execute()) {
			$result=$stmt->get_result();
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
            $stmt->close();
			return $user;
        } else {
            return NULL;
        }
    }
		
	/**
     * Get user List
     */
    public function getPendingList() {
		
 
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`,security_group, `_delete` FROM quickselect_customer where admin=0 and updated_at is null and _delete=0");
 
        if ($stmt->execute()) {
			$result=$stmt->get_result();
			$user = array();
				while($row = $result->fetch_assoc()) {
					$user[] = $row;
				}            
			error_log( print_r( $user, true ) );
            $stmt->close();
			return $user;
        } else {
            return NULL;
        }
    }
 
	/**
     * Storing new user
     * returns user details
     */
    public function inviteUser($email,$inviteid,$security_groups) {
        $uuid = uniqid('QS', true);        
 
        $stmt = $this->conn->prepare("INSERT INTO quickselect_customer(unique_id, email,invited_by_id,security_group, admin, created_at) VALUES(?, ?, ?, ?, 0, NOW())");

		$stmt->bind_param("ssss", $uuid,$email,$inviteid,$security_groups);

        $result = $stmt->execute();

        $stmt->close();

        // check for successful storage
        if ($result) {
			
					//send email
					$link ="https://deep.idworks.com/signup?email=".$email."&uuid=".$uuid;
					$message = file_get_contents(realpath(dirname(__FILE__)).'/mailer_invite.html');
					$message=str_replace("ChangeEmail",$link, $message);
						
					 $arrTo=array($email=>'');
					 $arrCC=array();//enter account manager emails here
					 $subject='Invitation to Quick Select';
					 $header='Quick Select Registration';
					 $body=$message;		 
			
					$retval=$this->Mailer($arrTo, $arrCC, $subject, $header, $body);
					//send email
				 
					if( $retval) {
						$stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer WHERE email = ?");
						$stmt->bind_param("s", $email);
						$stmt->execute();
						$user = $stmt->get_result()->fetch_assoc();
						$stmt->close();
			 
						return $user;
					}else 
					{
						return false;
					}
				 				 
            
        } else {
            return false;
        }
    }
 
	/**
     * Password reset request
     */
    public function forgotUser($email) {
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer WHERE email = ?");
		$stmt->bind_param("s", $email);
		$stmt->execute();
		$user = $stmt->get_result()->fetch_assoc();
		$uuid=$user['unique_id'];
		$stmt->close();

        // check for successful storage
        if ($uuid) {
			
					//send email
					$link ="https://deep.idworks.com/reset-password?email=".$email."&uuid=".$uuid;
					$message = file_get_contents(realpath(dirname(__FILE__)).'/mailer_reset_password.html');
					$message=str_replace("ChangeLink",$link, $message);
					$message=str_replace("thisEmail",$email, $message);	
					 $arrTo=array($email=>'');
					 $arrCC=array();//enter account manager emails here
					 $subject='Password Reset request';
					 $header='Quick Select Password Reset';
					 $body=$message;		 
			
					$retval=$this->Mailer($arrTo, $arrCC, $subject, $header, $body);
					//send email
				 
					if( $retval) {
						$stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer WHERE email = ?");
						$stmt->bind_param("s", $email);
						$stmt->execute();
						$user = $stmt->get_result()->fetch_assoc();
						$stmt->close();
			 
						return $user;
					}else 
					{
						return false;
					}
				 				 
            
        } else {
            return false;
        }
    }
 
    /**
     * Storing new user
     * returns user details
     */
    public function storeUser($fname, $lname, $email, $password, $company, $phone, $admin) {
        $uuid = uniqid('QS', true);
        $hash = $this->hashSSHA($password);
        $encrypted_password = $hash["encrypted"]; // encrypted password
        $salt = $hash["salt"]; // salt
 
        $stmt = $this->conn->prepare("INSERT INTO quickselect_customer(unique_id, fname, lname, email,company,phone, encrypted_password, salt, admin, created_at) VALUES(?,?, ?, ?, ?, ?, ?, ?, ?, NOW())");

		$stmt->bind_param("sssssssss", $uuid, $fname, $lname, $email,$company, $phone, $encrypted_password, $salt, $admin);

        $result = $stmt->execute();

        $stmt->close();

        // check for successful store
        if ($result) {
            $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
 
            return $user;
        } else {
            return false;
        }
    }
	
	/**
     * Resetting Password
     */
    public function resetPassword($email,$password,$uuid) {
        $hash = $this->hashSSHA($password);
        $encrypted_password = $hash["encrypted"]; // encrypted password
        $salt = $hash["salt"]; // salt
 
        $stmt = $this->conn->prepare("UPDATE `quickselect_customer` SET `encrypted_password`=?,`salt`=? WHERE `unique_id`=? and `email`=?");

		$stmt->bind_param("ssss",$encrypted_password, $salt, $uuid, $email);

        $result = $stmt->execute();
		$result=mysqli_affected_rows($this->conn);
        $stmt->close();

        // check for successful store
        if ($result) {
            $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
 
            return $user;
        } else {
            return false;
        }
    }
	
	/**
     * Storing new user in live environment
     * returns user details
     */
    public function livestoreUser($uuid, $fname, $lname, $email, $password, $company, $phone, $admin) {
        
        $hash = $this->hashSSHA($password);
        $encrypted_password = $hash["encrypted"]; // encrypted password
        $salt = $hash["salt"]; // salt
 
        $stmt = $this->conn->prepare("UPDATE quickselect_customer SET fname=?, lname=?, company=?, phone=?, encrypted_password=?, salt=?, admin=? , updated_at= NOW() WHERE email=? and unique_id=?");

		$stmt->bind_param("sssssssss", $fname, $lname , $company , $phone , $encrypted_password , $salt , $admin , $email  , $uuid);

        $result = $stmt->execute();

        $stmt->close();

        // check for successful store
        if ($result) {
            $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer WHERE email = ?");
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
 
            return $user;
        } else {
            return false;
        }
    }
	
 
    /**
     * Get user by email and password
     */
    public function getUserByEmailAndPassword($email, $password) {
 
        $stmt = $this->conn->prepare("SELECT * FROM quickselect_customer WHERE email = ? and _delete=0");
 
        $stmt->bind_param("s", $email);
		if ($stmt === FALSE) {
			die($mysqli->error);
		}
 
        if ($stmt->execute()) {
            $user = $stmt->get_result()->fetch_assoc();
            $stmt->close();
 
            // verifying user password
            $salt = $user['salt'];
            $encrypted_password = $user['encrypted_password'];
            $hash = $this->checkhashSSHA($salt, $password);
            // check for password equality
            if ($encrypted_password == $hash) {
                // user authentication details are correct
                return $user;
            }
        } else {
            return NULL;
        }
    }
 
    /**
     * Check user is existed or not
     */
    public function isUserExisted($email) {
        $stmt = $this->conn->prepare("SELECT email from quickselect_customer WHERE email = ?");
 
        $stmt->bind_param("s", $email);
 
        $stmt->execute();
 
        $stmt->store_result();
 
        if ($stmt->num_rows > 0) {
            // user existed 
            $stmt->close();
            return true;
        } else {
            // user not existed
            $stmt->close();
            return false;
        }
    }
 
    /**
     * Encrypting password
     * @param password
     * returns salt and encrypted password
     */
    public function hashSSHA($password) {
 
        $salt = sha1(rand());
        $salt = substr($salt, 0, 10);
        $encrypted = base64_encode(sha1($password . $salt, true) . $salt);
        $hash = array("salt" => $salt, "encrypted" => $encrypted);
        return $hash;
    }
 
    /**
     * Decrypting password
     * @param salt, password
     * returns hash string
     */
    public function checkhashSSHA($salt, $password) {
 
        $hash = base64_encode(sha1($password . $salt, true) . $salt);
 
        return $hash;
    }
 
}
 
?>