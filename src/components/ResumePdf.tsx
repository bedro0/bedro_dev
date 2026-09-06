import type { ReactNode } from "react";
import { Document, Page, View, Text, StyleSheet, Font, Link } from "@react-pdf/renderer";
import { jobs, projects } from "@/lib/experience";
import { stack } from "@/lib/stack";
import { parsePhoneNumber } from "react-phone-number-input"
import { socials } from "@/lib/socials"
Font.register({
    family: "Roboto",
    fonts: [
        { src: "https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmT.ttf", fontWeight: 400 },
        { src: "https://fonts.gstatic.com/s/roboto/v51/KFOKCnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmOClHrs6ljXfMMLoHQiA8.ttf", fontWeight: 400, fontStyle: "italic" },
        { src: "https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWub2bWmT.ttf", fontWeight: 500 },
        { src: "https://fonts.gstatic.com/s/roboto/v51/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWuYjammT.ttf", fontWeight: 700 },
    ],
});

const NAME = "Badri Isiani";
const EMAIL = socials.filter(elem => elem.platform === "Email")[0]
const PHONE = parsePhoneNumber("+13472928885");
const GITHUB = socials.filter(elem => elem.platform === "GitHub")[0]
type EducationItem = {
    institution: string;
    degree: string;
    dateLabel: string;
    details?: string[];
};

const education: EducationItem[] = [];

const styles = StyleSheet.create({
    page: {
        paddingVertical: 32,
        paddingHorizontal: 40,
        fontSize: 10,
        fontFamily: "Roboto",
        color: "#000000",
    },
    header: {
        marginBottom: 20,
        textAlign: "center",
    },
    name: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 4,
    },
    contact: {
        fontSize: 10,
    },
    section: {
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 4,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginBottom: 8,
    },
    skillsGroup: {
        marginBottom: 2,
    },
    skillsLabel: {
        fontWeight: 700,
    },
    entryList: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
    },
    entry: {
        marginBottom: 2,
    },
    entryHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    entryHeading: {
        fontWeight: 700,
    },
    entrySubheading: {
        fontStyle: "italic",
        marginBottom: 2,
    },
    bulletRow: {
        flexDirection: "row",
        marginLeft: 12,
        marginBottom: 1,
    },
    bulletPoint: {
        width: 10,
    },
    bulletText: {
        flex: 1,
    },
});

export default function ResumePdf() {
    const experience = Object.values(jobs).filter((job) => job.showOnResume !== false);
    const projectList = Object.values(projects);

    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                <Header />

                <Section title="Skills">
                    <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {stack.map((category) => (
                            <Text key={category.label} style={styles.skillsGroup}>
                                <Text style={styles.skillsLabel}>{category.label}: </Text>
                                {category.items.map((item) => item.name).join(", ")}
                            </Text>
                        ))}
                    </View>
                </Section>

                <Section title="Experience">
                    <View style={styles.entryList}>
                        {experience.map((job) => (
                            <Entry
                                key={job.company}
                                heading={job.company}
                                subheading={`${job.position} · ${job.type}`}
                                dateLabel={`${job.began} - ${job.ended}`}
                                bullets={job.accomplishments}
                            />
                        ))}
                    </View>
                </Section>

                <Section title="Projects">
                    <View style={styles.entryList}>
                        {projectList.map((project) => (
                            <Entry
                                key={project.title}
                                heading={project.title}
                                subheading={project.skills.join(", ")}
                                dateLabel={project.created}
                                bullets={project.accomplishments}
                            />
                        ))}
                    </View>
                </Section>

                {/* <Section title="Education">
                    <View style={styles.entryList}>
                        {education.map((item) => (
                            <Entry
                                key={item.institution}
                                heading={item.institution}
                                subheading={item.degree}
                                dateLabel={item.dateLabel}
                                bullets={item.details ?? []}
                            />
                        ))}
                    </View>
                </Section> */}
            </Page>
        </Document>
    );
}

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.name}>{NAME}</Text>
            <Text style={styles.contact}>
                <Link src={`mailto:${EMAIL.url}`}>{EMAIL.url.replace("mailto:", "")}</Link> · <Link src={`tel:${PHONE}`}>{PHONE ? PHONE.formatNational() : ""}</Link> · <Link src={GITHUB.url}>{GITHUB.url.replace("https://", "")}</Link>
            </Text>
        </View>
    );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.divider} />
            {children}
        </View>
    );
}

function Entry({
    heading,
    subheading,
    dateLabel,
    bullets,
}: {
    heading: string;
    subheading?: string;
    dateLabel: string;
    bullets: string[];
}) {
    return (
        <View style={styles.entry} wrap={false}>
            <View style={styles.entryHeader}>
                <Text style={styles.entryHeading}>{heading}</Text>
                <Text>{dateLabel}</Text>
            </View>
            {subheading && <Text style={styles.entrySubheading}>{subheading}</Text>}
            {bullets.length > 0 && (
                <View>
                    {bullets.map((bullet) => (
                        <View key={bullet} style={styles.bulletRow}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.bulletText}>{bullet}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}
