<?php
 
class DB_Functions {
 
	private $objDB;
	
 
    // constructor
    function __construct() {
        require_once 'connect.php';
         
        // Connecting to mysql database
        $DB_CONNECTION_INFO_DUDENET = array(
			'database_user'      => 'idw10000_deep',
			'database_password'  => 'ye0qwxszb3c6',
			'database_name'      => 'idw10000_qbs',
			'database_host'      => 'data.securedgear.com',
			);
         $this->objDB = new DsDatabase($DB_CONNECTION_INFO_DUDENET);		 
    }
 
    // destructor
    function __destruct() {
         
    }
	

	/**
     * Get all product color details
     */
    public function getAllCatProduct() {
	 
        $query="
		
					SELECT 'product' as placeholder,M.ProductOrder ,P.ProductID,ImageFile,ProductName,Price,ProductBaseSKU,ProductDesc1,ProductDesc2,B.BrandName as Brand,G.GenderName as Gender, P.ColorGroups as Colorgroups, AvailableSizes as A1_Label
				   FROM products P
				   INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
				   LEFT OUTER JOIN product_images I ON I.ImageID=PP.ImageID
				   LEFT OUTER JOIN qbs_product_brands B ON B.BrandID=P.BrandID
				   LEFT OUTER JOIN gender G ON G.GenderID=P.GenderID
				   INNER JOIN map_prod_cat M ON M.ProductID=P.ProductID
				   INNER JOIN categories C ON C.CategoryID=M.CatID
				   WHERE P.SiteID=998 AND P.StatusID=1 and ImageFile is not null and DefaultPrice=1 
				   group by P.ProductID
				   ORDER BY C.CategoryOrder,M.ProductOrder;
					
					
				";
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		    return $stmt;
    }
	
		/**
     * Get all product color details
     */
    public function getAllCats() {
	 
        $query=	"
					SELECT CategoryID,CategoryName,CategoryParent,CategoryOrder,CategoryDesc FROM categories WHERE SiteID=998 order by CategoryParent,CategoryOrder
					
				";
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		    return $stmt;
    }
    
    /**
     * Get single product color details
     */
    public function getCatProduct($catid) {
	 
        $query="
		
		SELECT 'product' as placeholder,M.ProductOrder ,P.ProductID,ImageFile,ProductName,Price,ProductBaseSKU,ProductDesc1,ProductDesc2,B.BrandName as Brand,G.GenderName as Gender, P.ColorGroups as Colorgroups, AvailableSizes as A1_Label
       FROM products P
       INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
       LEFT OUTER JOIN product_images I ON I.ImageID=PP.ImageID
       LEFT OUTER JOIN qbs_product_brands B ON B.BrandID=P.BrandID
       LEFT OUTER JOIN gender G ON G.GenderID=P.GenderID
       INNER JOIN map_prod_cat M ON M.ProductID=P.ProductID
       INNER JOIN categories C ON C.CategoryID=M.CatID
       WHERE P.SiteID=998 AND P.StatusID=1 and ImageFile is not null and DefaultPrice=1 AND (M.CatID=".$catid." or CategoryParent=".$catid.")
       group by P.ProductID
       ORDER BY C.CategoryOrder,M.ProductOrder;

		
				";
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		    return $stmt;
    }
	    /**
     * Get single product color details
     */
    public function getAllCatProducts($catid) {
	 
        $query="
					   SELECT P.ProductID
					   FROM products P
					   INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID       
					   INNER JOIN map_prod_cat M ON M.ProductID=P.ProductID
					   INNER JOIN categories C ON C.CategoryID=M.CatID
					   WHERE P.SiteID=998 AND P.StatusID=1 and DefaultPrice=1 AND (M.CatID in (".$catid."))
					   group by P.ProductID
					   ORDER BY  C.CategoryParent,C.CategoryOrder,M.ProductOrder;
		
				";
		$parameters=array();
		$stmt = $this->objDB->FetchColumn($query, $parameters);
		    return $stmt;
    }
	
	/**
     * Get category name
     */
    public function getCatName($catid) {
	 
        $query="SELECT CategoryName FROM categories WHERE  CategoryID=".$catid."";
		$parameters=array();
		$stmt = $this->objDB->FetchOne($query, $parameters);
		    return $stmt;
    }
	

    /**
     * Get single product details
     */
    public function getProductSimple($productid) {
	 
        $query="
					SELECT 'product' as placeholder,P.ProductID,ImageFile,ProductName,Price,ProductBaseSKU,ProductDesc1,ProductDesc2,B.BrandName as Brand,G.GenderName as Gender, P.ColorGroups as Colorgroups,
					(SELECT CONCAT(',',GROUP_CONCAT(distinct O1.OptionLabel ORDER BY O1.SortOrder),',') as A1_Label
					FROM products P
					INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
					LEFT OUTER JOIN product_attr_options O1 ON O1.OptionID=Attr1
					WHERE P.SiteID=998 AND P.StatusID=1 and P.ProductID=".$productid.") as A1_Label
					
					FROM products P
					INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
					LEFT OUTER JOIN product_images I ON I.ImageID=PP.ImageID
					LEFT OUTER JOIN qbs_product_brands B ON B.BrandID=P.BrandID
					LEFT OUTER JOIN gender G ON G.GenderID=P.GenderID
					WHERE P.SiteID=998 AND P.StatusID=1 and ImageFile is not null and DefaultPrice=1 and P.ProductID=".$productid."
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$stmt = $this->objDB->FetchAssoc($query, $parameters);
		    return $stmt;
    }
	
	    /**
     * Get get site ids
     */
    public function getSiteId() {
	 
        $query="
					Select ID,NAME from sites_base where DONE=1 order by ID Desc ;
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		    return $stmt;
    }
	
	/**
     * Get get site ids
     */
    public function getSizingChart($productid) {
		$sizingChart=array();
	 
        $query="
					SELECT distinct R.RowText,R.RowMeasure
					FROM qbs_size_chart C
					INNER JOIN qbs_size_chart_data D ON D.ChartID=C.ChartID
					INNER JOIN qbs_size_row R ON R.RowID=D.RowID
					INNER JOIN qbs_size_column Col ON Col.ColumnID=D.ColumnID
					INNER JOIN qbs_size_chart_row R2 ON R2.ChartID =C.ChartID AND R2.RowID=D.RowID
					WHERE C.StatusID=1 AND C.ChartID =(select ChartID from products where ProductID=".$productid." and ChartID is not null) AND R.StatusID=1 AND Col.StatusID=1
					ORDER BY RowOrder,ColumnOrder;
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$sizingChart["rows"] = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		
		$query="
					SELECT distinct Col.ColumnText
					FROM qbs_size_chart C
					INNER JOIN qbs_size_chart_data D ON D.ChartID=C.ChartID
					INNER JOIN qbs_size_row R ON R.RowID=D.RowID
					INNER JOIN qbs_size_column Col ON Col.ColumnID=D.ColumnID
					INNER JOIN qbs_size_chart_row R2 ON R2.ChartID =C.ChartID AND R2.RowID=D.RowID
					WHERE C.StatusID=1 AND C.ChartID =(select ChartID from products where ProductID=".$productid." and ChartID is not null) AND R.StatusID=1 AND Col.StatusID=1
					ORDER BY ColumnOrder;
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$sizingChart["columns"] = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		
		$query="
					SELECT D.DataText,R.RowMeasure
					FROM qbs_size_chart C
					INNER JOIN qbs_size_chart_data D ON D.ChartID=C.ChartID
					INNER JOIN qbs_size_row R ON R.RowID=D.RowID
					INNER JOIN qbs_size_column Col ON Col.ColumnID=D.ColumnID
					INNER JOIN qbs_size_chart_row R2 ON R2.ChartID =C.ChartID AND R2.RowID=D.RowID
					WHERE C.StatusID=1 AND C.ChartID =(select ChartID from products where ProductID=".$productid." and ChartID is not null) AND R.StatusID=1 AND Col.StatusID=1
					ORDER BY RowOrder;
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$sizingChart["data"] = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		
		
		
		return $sizingChart;
    }
	
	/**
     * Get single product details
     */
    public function getAllProducts() {
	 
        $query="					
					SELECT P.ProductID,ImageFile,ProductName,Price,ProductBaseSKU
					FROM products P
					INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
					LEFT OUTER JOIN product_images I ON I.ImageID=PP.ImageID
					LEFT OUTER JOIN qbs_product_brands B ON B.BrandID=P.BrandID
					LEFT OUTER JOIN gender G ON G.GenderID=P.GenderID
					WHERE P.SiteID=998 AND P.StatusID=1 and ImageFile is not null and DefaultPrice=1 and P.ProductID in (SELECT distinct ProductID FROM map_prod_cat WHERE CatID IN (SELECT CategoryID FROM categories WHERE SIteID=998) ORDER BY ProductOrder DESC);
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		    return $stmt;
    }
	
	/**
     * Get single product details
     */
	public function getProductColorGroups() {
 
		$query="
					Select * from color_group where StatusID=1
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters,$resultType = MYSQLI_ASSOC);
			return $stmt;
    }
	
	/**
     * Get related products details
     */
	public function getProductCompanion($productid) {
	 
        $query="
					Select RelatedProductID as Related from qbs_product_relation R INNER JOIN products P ON P.ProductID=RelatedProductID where R.ProductID=".$productid." and Companion=1 AND P.StatusID=1;
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$products = $this->objDB->FetchColumn($query, $parameters);
		$finalProducts=array();
		
		foreach ($products as &$value) {	
				$placeholder=$this->getProductSimple($value);
				array_push($finalProducts,$placeholder);
			}
		return $finalProducts;
    }
	
	/**
     * Get related products details
     */
	public function getProductRelated($productid) {
	 
        $query="
					SELECT MapID,M.ProductID,M.CatID,M.ProductOrder,P.ProductName,I.ImageName,I.ImageFile,Min(Price) as Price FROM map_prod_cat M
					INNER JOIN products P ON P.ProductID=M.ProductID
					INNER JOIN product_images I ON I.ImageID=ImgCategory
					INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
					WHERE P.StatusID=1 AND CatID IN (SELECT CatID FROM map_prod_cat WHERE ProductID=".$productid.") and P.ProductID!=".$productid."
					GROUP BY M.ProductID
					order by RAND();
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters,$resultType = MYSQLI_ASSOC);
		    return $stmt;
    }
	
	/**
     * Get new products
     */
	public function getProductNew() {
	 
        $query="
					SELECT P.ProductID,ProductName,Price,I.ImageFile
					FROM products P
					INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
					LEFT OUTER JOIN product_images I ON I.ImageID=PP.ImageID
					WHERE P.SiteID=998 AND P.StatusID=1
					GROUP BY P.ProductID 
					ORDER BY P.ProductID DESC
					limit 4
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters,$resultType = MYSQLI_ASSOC);
		    return $stmt;
    }

	/**
     * Get random products
     */
	public function getProductRandom() {
	 
        $query="
					SELECT P.ProductID,ProductName,Price,I.ImageFile
					FROM products P
					INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
					LEFT OUTER JOIN product_images I ON I.ImageID=PP.ImageID
					WHERE P.SiteID=998 AND P.StatusID=1
					GROUP BY P.ProductID 
					ORDER BY rand()
					limit 8
										
				";
				//--ORDER BY ProductName
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters,$resultType = MYSQLI_ASSOC);
		    return $stmt;
    }
	
	/**
     * Get single product color details
     */
    public function getProductVariant($productid) {
	 
        $query="	SELECT P.ProductID,ProductName,PP.Attr1,PP.Attr2,I.ImageFile,I.ImageID,Price,PricingID,SKU,O2.OptionColor as Color
					,DefaultPrice,Available,
					O1.OptionLabel as A1_Label,O1.OptionShortLabel as A1_Short,
					O2.OptionLabel as A2_Label,O2.OptionShortLabel as A2_Short
					FROM products P
					INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
					LEFT OUTER JOIN product_images I ON I.ImageID=PP.ImageID
					LEFT OUTER JOIN product_attr_options O1 ON O1.OptionID=Attr1
					LEFT OUTER JOIN product_attr_options O2 ON O2.OptionID=Attr2
					WHERE P.SiteID=998 AND P.StatusID=1 and I.ImageFile is not null and P.ProductID=".$productid."
					GROUP BY A2_Label
					ORDER BY A2_Label
				";
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		    return $stmt;
    }
	
	
	/**
     * Get single product size details
     */
    public function getProductSizes($productid) {
	 
        $query="SELECT PP.Attr1,
					O1.OptionLabel as A1_Label,O1.OptionShortLabel as A1_Short
					FROM products P
					INNER JOIN product_pricing PP ON PP.ProductID=P.ProductID
					LEFT OUTER JOIN product_attr_options O1 ON O1.OptionID=Attr1
					WHERE P.SiteID=998 AND P.StatusID=1 and P.ProductID=".$productid."
					GROUP BY A1_Label
					ORDER BY O1.SortOrder
				";
		$parameters=array();
		$stmt = $this->objDB->FetchAll($query, $parameters, $resultType = MYSQLI_ASSOC);
		    return $stmt;
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
     * Get user List
     */
    public function getSingleUser($email) {
	 
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer WHERE admin=0 and email = ? and _delete=0");
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
		
 
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer where admin=0 and _delete=0");
 
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
		
 
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer where admin=0 and updated_at is not null and _delete=0");
 
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
		
 
        $stmt = $this->conn->prepare("SELECT `unique_id`, `fname`, `lname`, `company`, `phone`, `email`, `admin`, `invite_id`, `invited_by_id`, `created_at`, `updated_at`, `_delete` FROM quickselect_customer where admin=0 and updated_at is null and _delete=0");
 
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
    public function inviteUser($email,$inviteid) {
        $uuid = uniqid('QS', true);        
 
        $stmt = $this->conn->prepare("INSERT INTO quickselect_customer(unique_id, email,invited_by_id, admin, created_at) VALUES(?, ?, ?, 0, NOW())");

		$stmt->bind_param("sss", $uuid,$email,$inviteid);

        $result = $stmt->execute();

        $stmt->close();

        // check for successful storage
        if ($result) {
			//send email
					// $to = $email;
					// $subject = "Invitation to Quick Select";
				 
					// $message = "<b>Please Click on the link below to create an account and access the Quick Select store.</b>";
					// $link ="https://quickselect.com/signup?email=".$email."&uuid=".$uuid;
					// $message .= "<br><a href=".$link.">Invitation Link</a><br>";
				 
					// $header = "From:sales@idworks.com \r\n";
				 
					// $header .= "MIME-Version: 1.0\r\n";
					// $header .= "Content-type: text/html\r\n";
				 
					// $retval = mail ($to,$subject,$message,$header);
				 
					// if( $retval == true ) {
						// echo "Message sent successfully...";
					// }else {
						// echo "Message could not be sent..." .$message ;
					// }
				 				 
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