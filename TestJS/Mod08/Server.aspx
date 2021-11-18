<%@ Page Language="C#" %>

<!DOCTYPE html>

<script runat="server">

    protected void Page_Load(object sender, EventArgs e)
    {
        string userName = Request.Params [ "userName" ];
        string addr = Request.Params [ "addr" ];
        string age = Request.Params [ "age" ];
        string title = Request.Params [ "title" ];
        string phoneNo = Request.Params [ "phoneNo" ];
        string interest = Request.Params [ "interest" ];
        string dept = Request.Params [ "dept" ];

        string msg = "";
        msg += "姓名 :" + userName + "<br/>";
        msg += "地址 : " + addr + "<br/>";
        msg += "年齡 : " + age + "<br/>";
        msg += "職稱 : " + title + "<br/>";
        msg += " 電話號碼 : " + phoneNo + "<br/>";

        msg += "<br/>興趣 : ";
        var interestArry = interest.Split( new char [ ] { ',' } );
        foreach ( var item in interestArry ) {
            switch ( item ) {
                case "1":
                    msg += " 爬山";
                    break;
                case "2":
                    msg += " 遊泳";
                    break;
                case "3":
                    msg += " 逛街";
                    break;
                default:
                    break;
            }
        }
        msg += "<br>部門 : " + dept;
        Label1.Text = msg;

    }
</script>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
        </div>
    </form>
</body>
</html>
