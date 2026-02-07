import { useParams } from 'react-router-dom';
import { Button, makeStyles, shorthands } from '@fluentui/react-components';
import { Edit24Regular, Delete24Regular } from '@fluentui/react-icons';

const useStyles = makeStyles({
    container: {
        ...shorthands.padding('32px'),
        maxWidth: '900px',
        ...shorthands.margin('0', 'auto'),
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '24px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 600,
        marginBottom: '8px',
    },
    meta: {
        fontSize: '13px',
        color: '#605e5c',
    },
    actions: {
        display: 'flex',
        ...shorthands.gap('8px'),
    },
    section: {
        marginBottom: '32px',
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 600,
        marginBottom: '16px',
        color: '#323130',
    },
    content: {
        fontSize: '14px',
        lineHeight: '1.6',
        color: '#323130',
    },
    codeBlock: {
        ...shorthands.padding('16px'),
        backgroundColor: '#f5f5f5',
        ...shorthands.borderRadius('4px'),
        ...shorthands.border('1px', 'solid', '#e1e1e1'),
        fontFamily: 'Consolas, Monaco, monospace',
        fontSize: '13px',
        overflowX: 'auto',
        marginBottom: '12px',
    },
    codeHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
        fontSize: '13px',
        fontWeight: 600,
    },
    notes: {
        ...shorthands.padding('16px'),
        backgroundColor: '#fff8dc',
        ...shorthands.borderRadius('4px'),
        ...shorthands.borderLeft('4px', 'solid', '#ffc107'),
        marginBottom: '16px',
    },
    noteItem: {
        marginBottom: '8px',
        fontSize: '14px',
    },
    links: {
        listStyle: 'none',
        ...shorthands.padding(0),
        ...shorthands.margin(0),
    },
    link: {
        color: '#0078D4',
        textDecoration: 'none',
        fontSize: '14px',
        marginBottom: '8px',
        display: 'block',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

const JournalEntry = () => {
    const styles = useStyles();
    const { id } = useParams();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Authentication Module Implementation</h1>
                    <div className={styles.meta}>Created: Feb 5, 2026 | Updated: 2 hours ago</div>
                </div>
                <div className={styles.actions}>
                    <Button icon={<Edit24Regular />}>Edit</Button>
                    <Button icon={<Delete24Regular />}>Delete</Button>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Description</h2>
                <div className={styles.content}>
                    Implemented JWT-based authentication system with refresh tokens and role-based access control.
                    Includes login, logout, token refresh and permission validation middleware.
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Files & Code</h2>
                
                <div className={styles.codeHeader}>
                    <span>AuthController.cs</span>
                    <Button size="small">Copy</Button>
                </div>
                <div className={styles.codeBlock}>
                    {`[HttpPost("login")]
public async Task<IActionResult> Login(LoginRequest request)
{
    var user = await _userService.ValidateCredentials(
        request.Username, request.Password);
    
    if (user == null)
        return Unauthorized();
    
    var token = _tokenService.GenerateToken(user);
    var refreshToken = _tokenService.GenerateRefreshToken();
    
    return Ok(new { token, refreshToken });
}`}
                </div>

                <div style={{ marginTop: '16px', fontSize: '13px', color: '#605e5c' }}>
                    Also: JwtMiddleware.cs | UserService.cs | Tests.cs
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Notes & Documentation</h2>
                <div className={styles.notes}>
                    <div className={styles.noteItem}>• Uses RS256 algorithm for signing</div>
                    <div className={styles.noteItem}>• Access tokens expire in 15 minutes</div>
                    <div className={styles.noteItem}>• Refresh tokens stored in httpOnly cookie</div>
                    <div className={styles.noteItem}>• Integrated with existing user database</div>
                </div>
            </div>

            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Related Resources</h2>
                <ul className={styles.links}>
                    <li><a href="#" className={styles.link}>→ Database: Users table schema</a></li>
                    <li><a href="#" className={styles.link}>→ API Docs: /api/auth endpoints</a></li>
                    <li><a href="#" className={styles.link}>→ Server: Production deployment config</a></li>
                </ul>
            </div>
        </div>
    );
};

export default JournalEntry;
